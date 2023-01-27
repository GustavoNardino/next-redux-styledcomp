import React from 'react'
import { S } from '../styles/header'

interface IApiObject {
  image1: string,
  image2: string,
}

const headerDados: IApiObject = {
  image1: 'a',
  image2: 'a'
}

type Props = {

}

const Header = ({ }: Props) => {
  return (
    <S.Container>
      <S.Image src={headerDados.image1} />
      <S.Image src={headerDados.image2} />
    </S.Container>
  )
}

export default Header