import styled from "styled-components";

export const BookForm = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  text-align: center;
  gap: 0 1rem;
  .name-label {
    grid-area: 1 / 1 / 2 / 2;
  }
  .name-input {
    grid-area: 2 / 1 / 3 / 2;
  }
  .author-label {
    grid-area: 1 / 2 / 2 / 3;
  }
  .author-input {
    grid-area: 2 / 2 / 3 / 3;
  }
  .genre-label {
    grid-area: 1 / 3 / 2 / 4;
  }
  .genre-input {
    grid-area: 2 / 3 / 3 / 4;
  }
  .status-label {
    grid-area: 1 / 4 / 2 / 5;
  }
  .status-input {
    grid-area: 2 / 4 / 3 / 5;
  }
  .rating-label {
    grid-area: 1 / 5 / 2 / 6;
  }
  .rating-input {
    grid-area: 2 / 5 / 3 / 6;
  }
  .submit {
    grid-area: 2 / 6 / 3 / 7;
  }
  input,
  select,
  button {
    height: 1.25rem;
  }
  button {
    width: 4.5rem;
  }
`;
