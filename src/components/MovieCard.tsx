import React from 'react'
import { IMovie } from '../utils/interfaces';
import * as styles from './Moviecard.module.css'
import { S } from '../styles/MovieCard'

type Props = {
    movie: IMovie
}

const MovieCard = ({ movie }: Props) => {
    return (
        <>
            <S.Container>
                <p>{movie.title}</p>
                <S.Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                {/* <p>{movie.overview}</p> */}
            </S.Container>
        </>
    )
}

export default MovieCard