export default function Modal({ children, offModal }) {
  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
      <div
        className="absolute top-0 left-0 h-full w-full bg-black/70"
        onClick={() => {
          offModal && offModal()
        }}></div>
      <div className="relative max-h-[calc(100%-100px)] w-[500px] overflow-auto rounded-md bg-white p-[10px]">
        {children}
      </div>
    </div>
  )
}

// <Modal><영화상세페이지 /></Modal>
