import { Link } from 'react-router'
import { useMovieStore } from '@/stores/movie'
import Loader from '@/components/Loader'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  const isLoading = useMovieStore(state => state.isLoading)

  return (
    <>
      {isLoading && <Loader />}
      <div className="mt-4">
        {movies.map(movie => (
          <Link
            className="block"
            key={movie.imdbID}
            to={`/movies/${movie.imdbID}`}>
            {movie.Title} ({movie.Year})
          </Link>
        ))}
      </div>
    </>
  )
}
