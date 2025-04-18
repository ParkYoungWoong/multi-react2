import { useState, useRef } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useUpdateTodo, useDeleteTodo } from '@/hooks/todo'
import Loader from '@/components/Loader'

export default function TodoItem({ todo }) {
  const queryClient = useQueryClient()
  const [isEditMode, setIsEditMode] = useState(false)
  const [isDone, setIsDone] = useState(todo.done)
  const [inputTitle, setInputTitle] = useState(todo.title)
  const inputRef = useRef(null)
  const { mutateAsync: updateTodo, isPending: isUpdating } = useUpdateTodo()
  const { mutateAsync: deleteTodo, isPending: isDeleting } = useDeleteTodo()

  async function handleSave() {
    if (inputTitle.trim() === '' || inputTitle === todo.title) {
      return
    }
    await updateTodo({
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
  async function handleDelete() {
    await deleteTodo({ todo })
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  }

  return (
    <div>
      <input type="checkbox" />
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
          <button
            disabled={isUpdating}
            onClick={handleSave}>
            {isUpdating ? <Loader size={20} /> : '저장'}
          </button>
          <button onClick={handleCancel}>취소</button>
        </>
      ) : (
        <>
          <div>{todo.title}</div>
          <button onClick={handleEditMode}>수정</button>
          <button
            disabled={isDeleting}
            onClick={handleDelete}>
            {isDeleting ? <Loader size={20} /> : '삭제'}
          </button>
        </>
      )}
    </div>
  )
}
