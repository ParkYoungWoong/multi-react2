import { Outlet } from 'react-router'
import MovieSearchBar from '@/components/movies/MovieSearchBar'
import MovieList from '@/components/movies/MovieList'

export default function Movies() {
  return (
    <>
      <h1>Movies Page!</h1>
      <MovieSearchBar />
      <MovieList />
      <Outlet />
    </>
  )
}
