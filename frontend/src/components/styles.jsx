import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 100px auto;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Tbody = styled.tbody``;

export const TableRow = styled.tr`
  text-align: center;
  &:nth-child(2n) {
    background-color: #ccc;
    color: black;
  }
`;

export const Thead = styled.th``;

export const Tdata = styled.td`
  padding: 0.8rem;
`;
