import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
`;

export const Input = styled.input`
    ${({ error }) => css`
        background-color: "white";
        border: solid 2px ${error ? "red" : "lightgray"};
        border-radius: 10px;
        color: "#282C34";
        height: 40px;
        padding: 0 15px;
        &:focus {
            border: solid 2px "#A0E9FD";
            outline: none;
        }
    `}
`;

export const Label = styled.label`
    ${({ error, theme }) => css`
        color: ${error ? "red" : "#282C34"};
        font-weight: bold;
        margin-bottom: 5px;
        padding-left: 10px;
    `}
`;
