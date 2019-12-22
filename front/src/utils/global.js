import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        box-sizing: border-box;

        /* CSS variables that can be used globally */
        --color-main: ${({ theme }) => theme.colors.main};
        --color-white: ${({ theme }) => theme.colors.whiteColor};
        --color-text: ${({ theme }) => theme.colors.textColor};
        --color-shadow: ${({ theme }) => theme.colors.shadow};
    
    }

    body {
        font-family: "PT Sans", sans-serif;
        font-weight: 400;
        line-height: 1.6;
    }

    a, 
    input, 
    textarea,
    button {
        outline: none;
        text-decoration: none;
        font-family: inherit;
    }
`;
