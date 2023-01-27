import React from 'react'
import { S } from '../styles/card'
type Props = {}

const Card = (props: Props) => {
    return (
        <S.Container>
            <S.Image />
            <S.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore tempore est nemo ea recusandae, animi eaque optio?</S.Text>
        </S.Container>
    )
}

export default Card