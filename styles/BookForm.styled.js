import styled from "styled-components";

export const FormContainer = styled.div`
  text-align: center;
  font-family: var(--font-rasa);
  h2 {
    margin-bottom: 1rem;
  }
`;

export const BookForm = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  text-align: center;
  gap: 0 1rem;
  font-size: 1.25rem;
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
    font-family: var(--font-rasa);
    border: 0.1rem solid var(--color-header);
    border-radius: 0.2rem;
    font-size: 1rem;
  }
  button {
    width: 6rem;
    background-color: white;
  }
  label {
    font-family: var(--font-rasa);
    font-weight: 700;
  }
  input {
    padding-left: 0.25rem;
  }
  input:focus,
  select:focus {
    outline: none;
  }
`;
