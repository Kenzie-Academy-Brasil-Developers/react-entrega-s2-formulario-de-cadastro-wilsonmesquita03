import styled from "styled-components";

interface IContainerProps{
    theme: string,
}

const Container = styled.div<IContainerProps>`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.page.backgroundColor};
`

export {Container}