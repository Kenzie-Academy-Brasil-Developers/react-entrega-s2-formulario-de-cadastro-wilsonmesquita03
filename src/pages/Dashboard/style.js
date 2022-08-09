import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.form.backgroundColor};

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