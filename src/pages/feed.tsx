import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch'
import moviesServices from '../services/moviesServices'
import { listMovies, reset } from '../slices/moviesSlice'
import { RootState } from '../store'
import { S } from '../styles/FeedContainer'
import { IMovie } from '../utils/interfaces'

// export async function getStaticProps() {
//   const data = await moviesServices.listMovies()
//   console.log('slice', data)
//   return {
//     props: {
//       data
//     }
//   }
// }


const Feed = (props: any) => {
  const { movies } = useAppSelector((state: RootState) => state.movies)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(listMovies())
  }, [])
  return (
    <S.Container>
      {movies && movies.map((item: IMovie, k: number) => {
        return <MovieCard movie={item} />
      })}
    </S.Container>
  )

}

export default Feed