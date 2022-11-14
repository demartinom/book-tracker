import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    };
    :root{
        --font-playfair: 'Playfair Display', serif;
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
