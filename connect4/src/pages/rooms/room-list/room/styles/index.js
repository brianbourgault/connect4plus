import styled, { css } from "styled-components";

export const Container = styled.div`
    ${() => css`
        border-bottom: 1px solid grey;
        cursor: pointer;
        color: "#282C34";
        font-size: 18px;
        text-align: center;
    `}
`;
