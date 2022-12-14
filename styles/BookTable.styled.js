import styled from "styled-components";

export const BookTableStyled = styled.table`
  text-align: center;
  margin-top: 5rem;
  margin-left: 10rem;
  word-break: break-word;
  font-family: var(--font-rasa);
  width: 100%;
  th,
  td {
    width: 13rem;
    font-size: 1.5rem;
    padding: 0.25rem;
  }
  th {
    background-color: var(--color-header);
    font-weight: 700;
  }
  th:last-child {
    background-color: var(--color-background);
  }
  tr:nth-child(odd) {
    background-color: var(--color-row-odd);
  }
  tr:nth-child(even) {
    background-color: var(--color-row-even);
  }
  td:last-child {
    background-color: var(--color-background);
  }
`;

export const Actions = styled.td`
  text-align: left;
  svg {
    cursor: pointer;
    color: var(--color-font);
  }
`;
