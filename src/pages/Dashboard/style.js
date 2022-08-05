import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--Grey-4);
`

const MoreInfo = styled.div`
    display: flex;
    flex-direction: column;

    margin: 2rem auto;
    
    width: 90%;
    max-width: 1000px;
    
    gap: 1rem;
    
    h1, p {
        color: var(--Grey-0)
    }
`

export { Container, MoreInfo }