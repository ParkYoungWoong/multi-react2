import TodoList from '@/components/todos/TodoList'
import TodoCreator from '@/components/todos/TodoCreator'

export default function Todos() {
  return (
    <>
      <TodoCreator />
      <TodoList />
    </>
  )
}
