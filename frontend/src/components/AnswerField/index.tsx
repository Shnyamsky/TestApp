import { FC } from "react"
import { NumberInput } from "../NumberInput"
import * as Styled from "./styled"

type AnswerFieldProps = {
  label: string
  answerText: string
  onChangeAnswerText: React.ChangeEventHandler<HTMLInputElement>
  points: number
  onChangePoints: React.ChangeEventHandler<HTMLInputElement>
}

const AnswerField: FC<AnswerFieldProps> = ({ label, answerText, onChangeAnswerText, points, onChangePoints }) => {
  return (
    <Styled.Label>
      {label}
      <Styled.AnswerInput type="text" value={answerText} onChange={onChangeAnswerText} placeholder="Введите ответ" />
      <NumberInput value={points} onChange={onChangePoints} />
    </Styled.Label>
  )
}

export { AnswerField }
