import TodoItem from '@/components/todos/TodoItem'
import { useReadTodos } from '@/hooks/todo'

export default function TodoList() {
  const { data: todos = [] } = useReadTodos()

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
