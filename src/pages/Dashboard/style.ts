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

export { Container }