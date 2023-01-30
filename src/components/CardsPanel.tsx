import React from 'react'
import Card from './Card'
import { S } from '../styles/cardPanel'

export interface ICardDados {
    text: string,
    image: string,
    estiloID: number,
}

export const objeto_dados: ICardDados[] = [
    {
        text: 'objeto 1',
        image: 'image 1',
        estiloID: 0,
    },
    {
        text: 'objeto 1',
        image: 'image 1',
        estiloID: 0,
    },
    {
        text: 'objeto 1',
        image: 'image 1',
        estiloID: 0,
    },

]

const CardsPanel = () => {

    return (
        <>
            <S.Title>Promoção</S.Title>
            <S.Container>
                {
                    objeto_dados.map((item: ICardDados) => {
                        return (
                            <Card
                                key={item.estiloID}
                                text={item.text}
                                image={item.image}
                                estiloID={item.estiloID}
                            />
                        )
                    })
                }

            </S.Container>
        </>
    )
}

export default CardsPanel