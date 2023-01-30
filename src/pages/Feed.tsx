import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch'
import { listMovies, reset } from '../slices/moviesSlice'
import { RootState } from '../store'
import { IMovie } from '../utils/interfaces'

const Feed = () => {
  const { movies } = useAppSelector((state: RootState) => state.movies)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(listMovies())
  }, [])
  return (
    <div className='d-flex flex-wrap align-items-center justify-content-center'>
      {movies && movies.map((item: IMovie, k: number) => {
        return (
          <div key={k} className='d-flex rounded bg-secondary m-2 flex-column col-2'>
            <p>{item.title}</p>
            <img style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Feed