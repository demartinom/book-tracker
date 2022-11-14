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
        --color-background: white; //placeholder
    }
    body{
        background-color: var(--color-background);
    }
`;
