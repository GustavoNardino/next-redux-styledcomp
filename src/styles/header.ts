import styled, { StyledComponent } from 'styled-components'

interface IApiObject {
    estiloscontainer: string
}

const headerEstilos: IApiObject = {
    estiloscontainer: `background-color: white;`
}


const Container: StyledComponent<"div", any, {}, never> = styled.div`
  //fixo
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  //dinâmico
  ${headerEstilos.estiloscontainer}
`;

const Image: StyledComponent<"img", any, {}, never> = styled.img`
  width: 100px;
  height: 60px;
  margin: 3px;
`;

export const S = {
    Container,
    Image
}