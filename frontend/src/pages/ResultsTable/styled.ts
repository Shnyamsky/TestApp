import styled from "@emotion/styled"

export const MainCase = styled.main`
  border: 2px solid #fff;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.3);
  padding: 50px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const TableCase = styled.table`
  border-collapse: collapse;

  th {
    border-bottom: 1px solid #fff;
    padding: 10px;
    text-align: left;

    background-color: rgba(255, 255, 255, 0.3);
    color: white;
  }

  td {
    border-bottom: 1px solid #fff;
    padding: 10px;
    text-align: left;
  }

  tr {
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`