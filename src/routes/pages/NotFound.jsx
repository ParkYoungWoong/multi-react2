import { Link } from 'react-router'

export default function NotFound() {
  return (
    <>
      <h1>404 페이지를 찾을 수가 없어요..</h1>
      <Link to="/">홈으로 돌아가세요!</Link>
    </>
  )
}
