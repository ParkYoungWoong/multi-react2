import { create } from 'zustand'

export const useMovieStore = create((set, get) => {
  return {
    movies: [],
    moviesCache: new Map(),
    inputText: '',
    searchText: '',
    isLoading: false,
    message: '',
    setInputText: inputText => set({ inputText }),
    setSearchText: searchText => set({ searchText }),
    fetchMovies: async function () {
      const { searchText } = get()
      if (searchText.length < 3) {
        set({ message: '3글자 이상 입력해주세요!' })
        return
      }
      set({ isLoading: true })
      const cached = moviesCache.get(`movies-${searchText}`)
      if (cached) {
        if (!(cached.staleTime < Date.now())) {
          set({
            movies: cached.value,
            isLoading: false
          })
          return
        }
      }
      const res = await fetch(
        `https://omdbapi.com/?apikey=9d38c929&s=${searchText}`
      )
      const { Search: movies } = await res.json()
      const { moviesCache } = get()
      moviesCache.set(`movies-${searchText}`, {
        value: movies,
        staleTime: Date.now() + 1000 * 60
      })
      set({
        movies,
        isLoading: false
      })
    }
  }
})
