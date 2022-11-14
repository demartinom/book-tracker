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
  td:last-child {
    background-color: var(--color-background);
  }
`;

export const Actions = styled.td`
  text-align: left;
  svg {
    cursor: pointer;
  }
`;
