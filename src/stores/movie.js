import { create } from 'zustand'

export const useMovieStore = create((set, get) => {
  return {
    movies: [],
    searchText: '',
    isLoading: false,
    message: '',
    setSearchText: searchText => set({ searchText }),
    fetchMovies: async function () {
      const { searchText } = get()
      if (searchText.length < 3) {
        set({ message: '3글자 이상 입력해주세요!' })
        return
      }
      set({ isLoading: true })
      const res = await fetch(
        `https://omdbapi.com/?apikey=9d38c929&s=${searchText}`
      )
      const { Search: movies } = await res.json()
      set({
        movies,
        isLoading: false
      })
    }
  }
})
