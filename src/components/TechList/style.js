import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 1rem 0;

    width: 100vw;

    > div { 
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        width: 90%;
        max-width: 1000px;
        
        padding: 1rem 0;
    }

    > div > button {
        width: 32px;
        height: 32px;
    }
        
    
`

const UlContainer = styled.ul`
    width: 90%;
    max-width: 1000px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    border-radius: 8px;

    background-color: var(--Grey-3);
`

export { Container, UlContainer}