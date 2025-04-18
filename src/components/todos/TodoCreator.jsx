import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useCreateTodo } from '@/hooks/todo'

export default function TodoCreator() {
  const [inputTitle, setInputTitle] = useState('')
  const { mutateAsync } = useCreateTodo()
  const queryClient = useQueryClient()

  async function handleSubmit() {
    if (inputTitle.trim() === '') {
      return
    }
    await mutateAsync({ inputTitle })
    setInputTitle('')
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  }

  return (
    <div>
      <button onClick={() => handleSubmit()}>추가</button>
      <input
        value={inputTitle}
        onChange={event => setInputTitle(event.currentTarget.value)}
        onKeyDown={event => {
          if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
            handleSubmit()
          }
        }}
      />
    </div>
  )
}
