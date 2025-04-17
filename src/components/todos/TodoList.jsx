import TodoItem from '@/components/todos/TodoItem'
import { useQuery } from '@tanstack/react-query'

export default function TodoList() {
  const { data: todos = [] } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch(
        'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            apikey: 'KDT8_bcAWVpD8',
            username: 'KDT5_ParkYoungWoong'
          }
        }
      )
      return await res.json()
    }
  })

  return (
    <>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  )
}
