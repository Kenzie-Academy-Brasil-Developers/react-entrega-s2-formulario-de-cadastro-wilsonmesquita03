import styled from "styled-components";

const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: ${({theme}) => theme.page.backgroundColor};

    h1, p {
        color: ${({theme}) => theme.h1.color};
    }
`

const MoreInfo = styled.div`
    display: flex;
    flex-direction: column;

    margin: 2rem auto;
    
    width: 90%;
    max-width: 1000px;
    
    gap: 1rem;
`

export { Container, MoreInfo }