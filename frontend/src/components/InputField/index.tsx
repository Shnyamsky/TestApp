import { FC } from "react"
import * as Styled from "./styled"

type InputFieldProps = {
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
  type?: HTMLInputElement["type"]
  placeholder?: string
  error?: string
}

export const InputField: FC<InputFieldProps> = ({
  label,
  onChange,
  value,
  placeholder,
  error,
  type = "text"
}) => {
  return (
    <Styled.Label>
      {label}
      <Styled.Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder || label}
      />
      <Styled.Error>{error}</Styled.Error>
    </Styled.Label>
  )
}
