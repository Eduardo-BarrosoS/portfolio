import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        font-size: 62.5%;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme["blue-600"]};
    }

    body {
        background: ${(props) => props.theme.darkBlue};
        background-image: url('./src/assets/bgEffect.svg');
        color: ${(props) => props.theme.white};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    
`