import styled from "@emotion/styled"

export const TableCase = styled.table`
  tbody {
    tr {
      padding: 12px;
      border-bottom: 1px solid gray;
      color: white;

      a {
        color: white;
        text-decoration: none;

        &:hover{
          color: gray;
          cursor: pointer;
        }
      }
    
      &:hover {
        color: gray;
        cursor: pointer;
      }
    }
  }
`