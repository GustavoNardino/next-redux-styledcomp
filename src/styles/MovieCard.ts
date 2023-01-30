import styled, { StyledComponent } from 'styled-components'




const Container: StyledComponent<"div", any, {}, never> = styled.div`
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    margin: 5px;
    width: 150px;
    height: 250px;
    &:hover {
        width: 250px;
        height: 350px;
    }
`;

const Image: StyledComponent<"img", any, {}, never> = styled.img`
    width: 100%;
    height: 100%;
`;

export const S = {
    Container,
    Image,
}