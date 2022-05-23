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
  align-items: flex-start;
`

export const Label = styled.label`
  font-size: 18px;

  input {
    margin-right: 10px;
  }
`

export const Button = styled.button`
  margin-top: 30px;
  font-size: 18px;
  width: max-content;
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid #fff;
  border-radius: 15px;
  color: white;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  &:disabled {
    color: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`

export const H4 = styled.h4`
  font-size: 20px;
  font-weight: normal;
`

export const ErrorCase = styled.div`
  color: red;
`