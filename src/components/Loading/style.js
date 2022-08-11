import styled from "styled-components";

const LoadingContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.page.backgroundColor};
`

export { LoadingContainer }