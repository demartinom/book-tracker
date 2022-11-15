import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    };
    :root{
        --font-rasa: 'Rasa', serif;
        --color-background: #FAEDCD; 
        --color-font: #0C1618;
        --color-header: #D4A373;
        --color-row-odd: #CCD5AE;
        --color-row-even: #E9EDC9;
    }
    body{
        background-color: var(--color-background);
        color: var(--color-font);
    }
    h1,
    h2,
    h3,
    h4,
    p,
    input,
    label,
    button,
    td,
    th{
        color: var(--color-font);
    }
`;
