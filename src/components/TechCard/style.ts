import styled from "styled-components";

const LiContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 50px;

    padding: 1rem;

    box-sizing: border-box;

    background: var(--Grey-4);

    border-radius: 8px;

    h1 {
        font-size: 14px;
    }
`

const DivButton = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;

    h4 {
        color: var(--Grey-1);
        font-weight: 400;
        font-size: 12px;
    }

    > button {
        width: 12px;
        height: 12px;

        min-width: 12px;

        padding: 0;
        background-color: transparent;

    }
`

export { LiContainer, DivButton }