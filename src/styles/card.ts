import styled, { StyledComponent } from 'styled-components'

import { objeto_estilos } from '../services/objeto'

const Container: StyledComponent<"div", any, {}, never> = styled.div`
  //fixo
  /* height: 200px; */
  border: 1px solid black;
  padding: 2px;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 5px;
  //dinâmico
  background-color: ${objeto_estilos.cardList[0].container_background_color};

`;

const Image: StyledComponent<"img", any, {}, never> = styled.img`
  width: 50%;
  height: 150px;
  margin: 3px;
  //dinamico

`;
const Text: StyledComponent<"p", any, {}, never> = styled.p`
  width: 50%;
  margin: 3px;
  //dinamico
  color: ${objeto_estilos.cardList[0].font_color};
`;

export const S = {
  Container,
  Image,
  Text,
}