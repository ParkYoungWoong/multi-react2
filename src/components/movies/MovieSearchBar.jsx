import { useMovieStore } from '@/stores/movie'
// Zustand 주의사항!: useXXXStore 훅으로 한 번에 하나의 상태(액션)만 가져와야 합니다!

export default function MovieSearchBar() {
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const message = useMovieStore(state => state.message)

  return (
    <>
      <div className="flex gap-2">
        <input
          className="rounded-md border-1 border-gray-500 px-3 py-2"
          value={searchText}
          onChange={e => setSearchText(e.currentTarget.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              fetchMovies()
            }
          }}
        />
        <button
          className="cursor-pointer rounded-md bg-blue-100 px-3 py-2 hover:bg-blue-200"
          onClick={() => fetchMovies()}>
          Search!
        </button>
      </div>
      <p className="text-sm text-red-500">{message}</p>
    </>
  )
}
