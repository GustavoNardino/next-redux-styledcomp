import styled, { StyledComponent } from 'styled-components'

import { IcardEstilos } from '../utils/interfaces'

const card_estilos: IcardEstilos = {
  estiloscontainer: `background-color: green;`,
  estilosText: `
    background-color: blue;
    font-size: 20px; 
    color: white; 
    text-align: center;
    `,
}

const Container: StyledComponent<"div", any, {}, never> = styled.div`
  //fixo
  border: 1px solid black;
  padding: 2px;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 5px;
  
  //dinâmico
  ${card_estilos.estiloscontainer}

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
  color: ${card_estilos.estilosText};
`;

export const S = {
  Container,
  Image,
  Text,
}