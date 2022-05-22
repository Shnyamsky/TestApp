import { FC } from "react"
import styled from "@emotion/styled"

type NumberInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: number
}

export const StyledInput = styled.input`
  width: 50px;
  margin: 5px;
  background-color: #fff;
  color: #000;

  height: 40px;
  font-size: 18px;
  line-height: 20px;
  padding: 10px;
  outline: none;
  border: 2px solid #fff;
  border-radius: 15px;
`

const NumberInput: FC<NumberInputProps> = ({ value, onChange }) => (
  <StyledInput type="number" {...{ value, onChange }} />
)

export { NumberInput }
