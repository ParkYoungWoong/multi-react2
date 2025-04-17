import { useState } from 'react'
import Modal from '@/components/Modal'

export default function About() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <h1>About Page!</h1>
      <button onClick={() => setIsOpen(true)}>모달 켜줘!</button>
      {isOpen && (
        <Modal
          offModal={() => {
            setIsOpen(false)
          }}>
          <h1>나 모달임!</h1>
        </Modal>
      )}
    </>
  )
}
