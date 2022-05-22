import { FC } from "react"

import { useAppDispatch } from "../../hooks/store"
import { editActions } from "../../store/reducers"
import { AnswerField, DeleteButton } from "../../components"
import * as Styled from "./styled"
import { Answer as AnswerType } from "../../types"

const useActions = () => {
  const dispatch = useAppDispatch()

  return {
    deleteAnswer: (questionIndex: number, answerIndex: number) => () =>
      dispatch(editActions.deleteAnswer({ questionIndex, answerIndex })),

    changeAnswerTitle: (questionIndex: number, answerIndex: number) => (e) =>
      dispatch(editActions.changeAnswerTitle({ questionIndex, answerIndex, text: e.target.value })),

    changeAnswerPoints: (questionIndex: number, answerIndex: number) => (e) =>
      dispatch(editActions.changeAnswerPoints({ questionIndex, answerIndex, points: Number(e.target.value) }))
  }
}

type AnswerProps = {
  questionIndex: number
  answerIndex: number
  answer: AnswerType
  deleteDisabled: boolean //question.answers.length === 1
}

const Answer: FC<AnswerProps> = ({ questionIndex, answerIndex, answer, deleteDisabled }) => {
  const actions = useActions()

  return (
    <Styled.RowCase>
      <AnswerField
        label={`Ответ ${answerIndex + 1}`}
        answerText={answer.text}
        onChangeAnswerText={actions.changeAnswerTitle(questionIndex, answerIndex)}
        points={answer.points}
        onChangePoints={actions.changeAnswerPoints(questionIndex, answerIndex)}
      />
      <DeleteButton onClick={actions.deleteAnswer(questionIndex, answerIndex)} disabled={deleteDisabled} />
    </Styled.RowCase>
  )
}

export default Answer
