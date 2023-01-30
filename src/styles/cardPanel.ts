import styled, { StyledComponent } from 'styled-components'
import { IcardPanelEstilos } from '../utils/interfaces';

const cardPanelEstilos: IcardPanelEstilos = {
  estiloscontainer: `background-color: blue;`,
  estilosTitulo: `
    background-color: blue;
    font-size: 20px; 
    color: white; 
    text-align: center;
    `,
}


const Container: StyledComponent<"div", any, {}, never> = styled.div`
  //fixo
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    grid-auto-columns: 33.3%;
  //dinâmico
  ${cardPanelEstilos.estiloscontainer}
`;

const Title: StyledComponent<"h2", any, {}, never> = styled.h2`
  //dinâmico
  ${cardPanelEstilos.estilosTitulo}
  `;

export const S = {
  Container,
  Title,
}