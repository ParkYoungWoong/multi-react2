import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function TodoCreator() {
  const [inputTitle, setInputTitle] = useState('')
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            apikey: 'KDT8_bcAWVpD8',
            username: 'KDT5_ParkYoungWoong'
          },
          body: JSON.stringify({
            title: inputTitle
          })
        }
      )
      return await res.json()
    }
  })
  const queryClient = useQueryClient()

  async function handleSubmit() {
    if (inputTitle.trim() === '') {
      return
    }
    await mutateAsync()
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
