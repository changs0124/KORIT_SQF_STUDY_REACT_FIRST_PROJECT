import { css } from "@emotion/react";

// 컴포넌트가 아니기 때문에 대문자로 시작 X
export const Container = (width) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid black;
    height: 100%;
`
export const header = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 500px;
`
export const body = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid black;
    width: 500px;
    height: 500px;
    & > div, img {
        border: 1px solid black;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`
export const footer = css`
    display: flex;
    flex-direction: column;
    align-content: center;
    box-sizing: border-box;
    border: 1px solid black;
    width: 500px;
    height: 200px;
    & > input {
        display: block;
        width: 100%;
        height: 50px;
    }
`