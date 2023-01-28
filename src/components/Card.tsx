import React from 'react'
import { S } from '../styles/card'

type Props = {
    text: string,
    image: string,
    estiloID:number,
}

const Card = ({ text, image, estiloID }: Props) => {

    return (
        <S.Container>
            <S.Image alt={image} />
            <S.Text>{text}</S.Text>
        </S.Container>
    )
}

export default Card