import styled, { StyledComponent } from 'styled-components'

interface IApiObject {
    estiloscontainer: string,
    estilosTitulo: string
}

const cardPanelEstilos: IApiObject = {
    estiloscontainer: `background-color: blue;`,
    estilosTitulo: `
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
    /* grid-template-columns: repeat(3, 1fr);   */
    /* grid-template-columns:  30%; */
    grid-auto-columns: 33.3%;
  //dinâmico
  ${cardPanelEstilos.estiloscontainer}
`;

const Title: StyledComponent<"h2", any, {}, never> = styled.h2`
  ${cardPanelEstilos.estilosTitulo}
  //dinâmico
  ${cardPanelEstilos.estiloscontainer}
`;

export const S = {
    Container,
    Title,
}