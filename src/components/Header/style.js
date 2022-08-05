import styled from "styled-components";

const Container = styled.header`
    display: flex;
    align-items: center;

    width: 100vw;
    min-height: 113px;

    border-bottom: 1px solid var(--Grey-3);

    background-color: var(--Grey-4);

`

const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--Grey-0);

    h4{
        color: var(--Grey-1)
    }

    @media (max-width: 500px){
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    width: 90%;
    max-width: 1000px;
    
    margin: 0 auto;
`
export { Container, DivHeader }