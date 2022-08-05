import styled, { css } from "styled-components";

const Button = styled.button`
    font-size: ${({size}) => size || "1rem"};
    height: ${({h}) => h || "48px"};
    color: var(--Grey-0);
    border-radius: 8px;
    cursor: pointer;
    border: none;

    box-sizing: border-box;
    padding: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: ${(fw) => fw || 500};
    font-family: 'Inter', sans-serif;

    ${({theme}) => {
        if(theme === "grey"){
            return css`
                background-color: var(--Grey-3);
                
                :hover{
                    background-color: var(--Grey-2);
                }
                :disabled {
                    background-color: var(--Grey-1);
                }
            `
        }else{
            return css`
                background-color: var(--Color-primary);

                :hover{
                    background-color: var(--Color-primary-focus);
                }

                :disabled {
                    background-color: var(--Color-primary-negative)
                }
            `
        }
    }}


`
export { Button }