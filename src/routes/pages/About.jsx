import { useCountStore } from '@/stores/count'

export default function About() {
  const count = useCountStore(state => state.count)
  const double = useCountStore(state => state.double)
  const increase = useCountStore(state => state.increase)
  const decrease = useCountStore(state => state.decrease)
  return (
    <>
      <h1>About Page!</h1>
      <h2>
        {count} / {double}
      </h2>
      <button onClick={() => increase()}>증가</button>
      <button onClick={() => decrease()}>감소</button>
    </>
  )
}
