import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function SignIn() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const id = formData.get('id')
    const pw = formData.get('pw')
    if (id && pw) {
      // 로그인 성공!
      localStorage.setItem('accessToken', 't1234567')
      navigate('/')
      return
    }
    // 로그인 실패
    setMessage('아이디 또는 비밀번호가 일치하지 않습니다.')
  }
  return (
    <>
      <h1>Sign In Page!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          name="id"
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="pw"
        />
        <button type="submit">로그인</button>
        {message && <p className="text-red-500">{message}</p>}
      </form>
    </>
  )
}
