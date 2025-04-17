import { Outlet, ScrollRestoration } from 'react-router'
import Header from '@/components/Header'

export default function Default() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </>
  )
}
