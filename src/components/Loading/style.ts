import styled from "styled-components";

const LoadingContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    background-color: ${({theme}) => theme.page.backgroundColor};
`

export { LoadingContainer }