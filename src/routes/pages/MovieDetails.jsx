import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import Loader from '@/components/Loader'
import Modal from '@/components/Modal'

export default function MovieDetails() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchMovieDetails()
  }, [])

  async function fetchMovieDetails() {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&i=${movieId}`)
    const movie = await res.json()
    setMovie(movie)
    setIsLoading(false)
  }

  return (
    <Modal offModal={() => navigate(-1)}>
      <h1>Movie Details Page!</h1>
      {isLoading && <Loader />}
      {movie && (
        <>
          <h2 className="text-2xl font-bold">{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <img
            src={movie.Poster.replace('SX300', 'SX900')}
            alt={movie.Title}
            width="500"
          />
        </>
      )}
    </Modal>
  )
}
