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

    background-color: ${({theme}) => theme.form.backgroundColor};

    border-radius: 8px;

    p {
        color: var(--Grey-1)
    }

    label {
        color: ${({theme}) => theme.h1.color};
    }


    input::placeholder{
        color: var(--Grey-1);
    }

    input {
        color: ${({theme}) => theme.h1.color};
        min-width: 90%;
    }

    button {
        width: 90%;
        min-width: 90%;
    }

    h1 {
        padding-top: 2rem;
        padding-bottom: 1rem;

        color: ${({theme}) => theme.h1.color};
    }
`

export { Form }