import styled from "styled-components";

export const BookTableStyled = styled.table`
  text-align: center;
  margin-top: 5rem;
  th,
  td {
    width:12rem;
    font-size: 1.5rem;
  }
`;

export const Actions = styled.td`
  display: flex;
  gap: .5rem;
  svg{
    cursor: pointer;
  }
`;
