import { Link } from 'react-router'
import Loader from '@/components/Loader'
import { useMovies } from '@/hooks/movie'

export default function MovieList() {
  const { data: movies = [], isLoading } = useMovies()

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
