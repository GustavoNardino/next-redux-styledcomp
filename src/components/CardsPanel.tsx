import React from 'react'
import Card from './Card'
import { S } from '../styles/cardPanel'
import { objeto_dados } from '../utils/interfaces'


const CardsPanel = () => {

    return (
        <>
            <S.Title>Promoção</S.Title>
            <S.Container>
                {
                    objeto_dados.cardList.map((item: any, k: number) => {
                        return (
                            <Card key={k} text={item.text} image={item.image} estiloID={item.estiloID} />
                        )
                    })
                }

            </S.Container>
        </>
    )
}

export default CardsPanel