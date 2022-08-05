import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 72px;

    background-color: var(--Grey-4);

    border-bottom: 1px solid var(--Grey-3);

    img {
        width: 100px;
        height: 14px;
    }
`

const DivHeader = styled.div`
    width: 90%;
    max-width: 1000px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export { Container, DivHeader }