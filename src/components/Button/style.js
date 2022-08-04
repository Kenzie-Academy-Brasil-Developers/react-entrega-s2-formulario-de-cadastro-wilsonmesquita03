import styled, { css } from "styled-components";

const Button = styled.button`
    font-size: ${({size}) => size || "1rem"};
    height: ${({height}) => height || "48px"};
    color: var(--Grey-0);
    border-radius: 8px;
    cursor: pointer;
    border: none;
    font-weight: 500;

    ${({theme}) => {
        if(theme === "grey"){
            return css`
                background-color: var(--Grey-1);
                
                :hover{
                    background-color: var(--Grey-2);
                }
            `
        }else{
            return css`
                background-color: var(--Color-primary);

                :hover{
                    background-color: var(--Color-primary-focus);
                }
            `
        }
    }}


`
export { Button }