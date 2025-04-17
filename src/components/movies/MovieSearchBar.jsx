import { useMovieStore } from '@/stores/movie'
import { useMovies } from '@/hooks/movie'

export default function MovieSearchBar() {
  useMovies()
  const inputText = useMovieStore(state => state.inputText)
  const setInputText = useMovieStore(state => state.setInputText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const message = useMovieStore(state => state.message)

  return (
    <>
      <div className="flex gap-2">
        <input
          className="rounded-md border-1 border-gray-500 px-3 py-2"
          value={inputText}
          onChange={e => setInputText(e.currentTarget.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              setSearchText(inputText)
            }
          }}
        />
        <button
          className="cursor-pointer rounded-md bg-blue-100 px-3 py-2 hover:bg-blue-200"
          onClick={() => {
            setSearchText(inputText)
          }}>
          Search!
        </button>
      </div>
      <p className="text-sm text-red-500">{message}</p>
    </>
  )
}
