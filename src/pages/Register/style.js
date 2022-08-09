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

    #demo-simple-select-filled {
        color: ${({theme}) => theme.h1.color};
    }
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;

    width: 95vw;
    max-width: 370px;
`

export { Container, Div}