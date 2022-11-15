import React from "react";
import { HeroStyled } from "../styles/Hero.styled";

export default function Hero() {
  return (
    <HeroStyled>
      <h1>Book Tracker</h1>
      <h2>
        Track books you have read, want to read, or are currently reading. You can also sort your tracked books by any of the categories listed.
      </h2>
    </HeroStyled>
  );
}
