import styled, { css } from "styled-components";

export const Button = styled.button`
    ${() => css`
        align-items: center;
        background-color: "#282c34";
        border: 2px solid "#282c34";
        border-radius: 4px;
        color: "white";
        cursor: pointer;
        display: flex;
        flex: 1;
        font-size: 16px;
        font-weight: bold;
        height: 40px;
        justify-content: center;
        margin: auto;
        margin-bottom: 5px;
        margin-top: 5px;
        min-height: 40px;
        opacity: 0.9;
        padding: 0;
        transition: "0.3s";
        width: 100%;
        &:focus {
            border-color: "#A0E9FD";
            outline: none;
        }
        &:hover {
            opacity: 0.6;
        }
    `}
`;
