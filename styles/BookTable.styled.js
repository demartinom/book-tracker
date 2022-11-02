import styled from "styled-components";

export const BookTableStyled = styled.table`
  text-align: center;
  th,
  td {
    width: 8rem;
  }
`;

export const Actions = styled.td`
  display: flex;
  gap: .5rem;
  svg{
    cursor: pointer;
  }
`;
