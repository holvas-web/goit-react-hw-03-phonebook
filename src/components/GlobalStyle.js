import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle `
    body {
        margin: 0;
        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        font-family: math, sans-serif; //'Segoe UI'
        line-height: 1.10;
        letter-spacing: 0.2px;
    }

    li::marker {
        padding: 0;
    }

    h1, h2 {
        padding-top: 30px;
    }
    p {
        padding: 0;

        font-family: 'Roboto', 'Oxygen', sans-serif;
        line-height: 1.10;
        letter-spacing: 0.2px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: yellow;
        padding: 10px 30px;

        border-radius: 4px;
        box-shadow: 0px 2px 6px 0px lawngreen;
        border: 1px solid lawngreen;

        transition: all 300ms ease-in-out;

        &:hover {
            transform: scale(1.03);
            background-color: #09f;
        }
    }
`
