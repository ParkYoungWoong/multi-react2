import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import Loader from '@/components/Loader'
import Modal from '@/components/Modal'
import { useQuery } from '@tanstack/react-query'

export default function MovieDetails() {
  const { movieId } = useParams()
  const navigate = useNavigate()

  const { data: movie, isLoading } = useQuery({
    queryKey: ['movie', 'details', movieId],
    queryFn: async () => {
      const res = await fetch(
        `https://omdbapi.com/?apikey=9d38c929&i=${movieId}`
      )
      return res.json()
    },
    staleTime: 1000 * 60 // 1분
  })

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
