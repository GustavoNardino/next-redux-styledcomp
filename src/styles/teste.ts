
import styled, { StyledComponent } from 'styled-components'

interface dadosType {
  estilo1: string,
  estilo2: string,
}

//ESTILOS VINDOS DO STATE
const dados: dadosType = {
  estilo1: 'center',
  estilo2: 'yellow',
}

//DESENHA O LAYOUT BÁSICO E DINAMIZA SÓ O QUE QUISER
const Title: StyledComponent<"h1", any, {}, never> = styled.h1`
  font-size: 1.5em;
  text-align: ${dados.estilo1};
  color: palevioletred;
`;


const Wrapper: StyledComponent<"section", any, {}, never> = styled.section`
  padding: 4em;
  background: ${dados.estilo2};
  backgound-color: #123aaa;
`;

export const S = {
  Title,
  Wrapper
}