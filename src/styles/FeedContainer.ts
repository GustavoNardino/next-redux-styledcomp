import styled, { StyledComponent } from 'styled-components'




const Container: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    grid-auto-columns: 20%;
`;

export const S = {
    Container,
}