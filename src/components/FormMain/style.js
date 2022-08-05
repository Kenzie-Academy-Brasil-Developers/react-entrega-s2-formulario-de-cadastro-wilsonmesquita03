import styled from "styled-components";

const Form = styled.form`
    width: 95vw;
    max-width: 370px;
    max-height: 100%;
    
    overflow-y: scroll;
    
    box-sizing: border-box;

    ::-webkit-scrollbar {
        width: 2px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 20px;
        border: 3px solid var(--Grey-2);
    }


    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background-color: var(--Grey-3);

    border-radius: 8px;

    p {
        color: var(--Grey-1)
    }

    label {
        color: var(--Grey-0);
    }


    input::placeholder{
        color: var(--Grey-1);
    }

    input {
        color: var(--Grey-0);
        min-width: 90%;
    }

    button {
        width: 90%;
        min-width: 90%;
    }

    h1 {
        padding-top: 2rem;
        padding-bottom: 1rem;

        color: var(--Grey-0);
    }
`

export { Form }