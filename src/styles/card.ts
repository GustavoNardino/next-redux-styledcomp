import styled, { StyledComponent } from 'styled-components'

interface IApiObject {
    estiloscontainer: string
}

const headerEstilos: IApiObject = {
    estiloscontainer: `background-color: green;`
}


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
  ${headerEstilos.estiloscontainer}
`;

const Image: StyledComponent<"img", any, {}, never> = styled.img`
  width: 50%;
  height: 150px;
  margin: 3px;
`;
const Text: StyledComponent<"p", any, {}, never> = styled.p`
  width: 50%;
  margin: 3px;
`;

export const S = {
    Container,
    Image,
    Text,
}