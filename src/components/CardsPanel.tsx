import React from 'react'
import Card from './Card'
import { S } from '../styles/cardPanel'
interface IApiObject {

}

const cardPanelDados: IApiObject = {

}

type Props = {}

const CardsPanel = ({ }: Props) => {
    return (
        <>
            <S.Title>Promoção</S.Title>
            <S.Container>
                <Card />
                
            </S.Container>
        </>
    )
}

export default CardsPanel