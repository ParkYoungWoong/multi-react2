import { useState, useRef } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useUpdateTodo } from '@/hooks/todo'

export default function TodoItem({ todo }) {
  const queryClient = useQueryClient()
  const [isEditMode, setIsEditMode] = useState(false)
  const [inputTitle, setInputTitle] = useState(todo.title)
  const inputRef = useRef(null)
  const { mutateAsync } = useUpdateTodo()

  async function handleSave() {
    if (inputTitle.trim() === '' || inputTitle === todo.title) {
      return
    }
    await mutateAsync({
      todo,
      inputTitle
    })
    setIsEditMode(false)
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  }
  function handleCancel() {
    setIsEditMode(false)
    setInputTitle(todo.title)
  }
  function handleEditMode() {
    setIsEditMode(true)
    setTimeout(() => {
      inputRef.current.focus()
    })
  }

  return (
    <div>
      {isEditMode ? (
        <>
          <input
            ref={inputRef}
            className="rounded-md border-1 border-gray-300 p-2"
            value={inputTitle}
            onChange={event => setInputTitle(event.currentTarget.value)}
            onKeyDown={event => {
              if (event.key === 'Escape') {
                handleCancel()
              }
            }}
          />
          <button onClick={handleSave}>저장</button>
          <button onClick={handleCancel}>취소</button>
        </>
      ) : (
        <>
          <div>{todo.title}</div>
          <button onClick={handleEditMode}>수정</button>
          <button>삭제</button>
        </>
      )}
    </div>
  )
}
