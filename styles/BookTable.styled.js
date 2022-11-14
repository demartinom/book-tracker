import styled from "styled-components";

export const BookTableStyled = styled.table`
  text-align: center;
  margin-top: 5rem;
  margin-left: 9rem;
  th,
  td {
    width:12rem;
    font-size: 1.5rem;
  }
  th{
    background-color: var(--color-header);
  }
  th:last-child{
    background-color: var(--color-background);
  }
`;

export const Actions = styled.td`
  display: flex;
  gap: .5rem;
  svg{
    cursor: pointer;
  }
`;
