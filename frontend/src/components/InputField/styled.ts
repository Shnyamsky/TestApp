import styled from "@emotion/styled"

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 18px;
  line-height: 20px;
`

export const Input = styled.input`
  width: 435px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;

  outline: none;
  border: none;
  border-bottom: 2px solid #fff;

  height: 40px;
  font-size: 18px;
  line-height: 20px;
  padding: 10px;
  outline: none;
`

export const Error = styled.div`
  color: red;
  position: absolute;
  bottom: 0;
`
