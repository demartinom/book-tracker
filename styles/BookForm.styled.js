import styled from "styled-components";

export const BookForm = styled.form`
  display: flex;
  align-items: center;
  font-family: var(--font-playfair);
  gap: .5rem;
  button {
    margin-top: 0.8rem;
  }
`;
export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    font-size: 1.5rem;
  }
`;
