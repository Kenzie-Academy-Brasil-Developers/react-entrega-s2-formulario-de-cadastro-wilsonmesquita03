import styled from "styled-components"

const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    background-color: rgba(0, 0, 0, 0.5);
    
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

`

const Modal = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    
    width: 90vw;
    max-width: 370px;

    padding: 1rem;

    box-sizing: border-box;

    background-color: var(--Grey-3);

    #demo-simple-select-filled, #name, #demo-simple-select-filled-label, input, label {
        color: var(--Grey-0)
    }

    button {
        width: 100%;
    }
`

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0rem 1rem;

    box-sizing: border-box;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    width: 90vw;
    max-width: 370px;

    background-color: var(--Grey-2);

    button {
        background-color: transparent;
        color: var(--Grey-1);
        padding: 0;

    }

    button:hover {
        background-color: transparent;
    }
`

export {ModalContainer, Modal, ModalHeader}