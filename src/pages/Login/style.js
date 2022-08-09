import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.page.backgroundColor};
`

export {Container}