import { useQuery } from '@tanstack/react-query'
import { useMovieStore } from '@/stores/movie'

export function useMovies() {
  const searchText = useMovieStore(state => state.searchText)
  return useQuery({
    queryKey: ['movies', searchText],
    queryFn: async () => {
      const res = await fetch(
        `https://omdbapi.com/?apikey=9d38c929&s=${searchText}`
      )
      const { Search: movies } = await res.json()
      return movies
    },
    staleTime: 1000 * 60, // 1분
    enabled: Boolean(searchText)
  })
}
