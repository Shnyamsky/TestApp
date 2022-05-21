import styled from "@emotion/styled"

export const TableCase = styled.table`
  border-collapse: collapse;

  tr {
    padding: 12px;
    color: white;

    a {
      color: white;
      text-decoration: none;
    }
  
    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  th {
    border-bottom: 1px solid #fff;
    padding: 10px;
    text-align: left;

    background-color: rgba(255, 255, 255, 0.3);
    color: white;
  }

  td {
    padding: 10px;
    text-align: center;
  }
`