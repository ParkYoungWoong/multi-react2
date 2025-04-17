import { redirect } from 'react-router'

function checkAuth() {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return true
  }
  return false
}

export default function () {
  if (checkAuth()) {
    return true
  }
  return redirect('/signin')
}
