import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    };
    :root{
        --font-playfair: 'Kreon', serif;
        --color-background: #FAEDCD; 
        --color-font: #0C1618;
        --color-header: #D4A373;
        --color-row-odd: #CCD5AE;
        --color-row-even: #E9EDC9;
    }
    body{
        background-color: var(--color-background);
        color: var(--color-font)
    }
`;
