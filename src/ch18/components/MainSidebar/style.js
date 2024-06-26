import { css } from "@emotion/react";

export const layout = (isShow) => css`
    position: absolute;
    top: 0;
    left: ${isShow ? 0 : -200}px;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    border-right: 2px solid #dbdbdb;
    width: 200px;
    height: 100%;
    background-color: #fafafa;

`