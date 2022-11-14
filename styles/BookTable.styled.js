import styled from "styled-components";

export const BookTableStyled = styled.table`
  text-align: center;
  margin-top: 5rem;
  margin-left: 9rem;
  th,
  td {
    width: 12rem;
    font-size: 1.5rem;
  }
  th {
    background-color: var(--color-header);
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
  td:nth-child(6) {
    background-color: var(--color-background);
  }
`;

export const Actions = styled.td`
  display: flex;
  gap: 0.5rem;
  svg {
    cursor: pointer;
  }
`;
