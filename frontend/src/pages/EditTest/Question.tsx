import { FC } from "react"

import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import { useAppDispatch } from "../../hooks/store"
import { editActions } from "../../store/reducers"
import { DeleteButton, InputField } from "../../components"
import * as Styled from "./styled"
import { AnswersType, Question as QuestionType } from "../../types"
import Answer from "./Answer"

const useActions = () => {
  const dispatch = useAppDispatch()

  return {
    addAnswer: (questionIndex: number) => () => dispatch(editActions.addAnswer(questionIndex)),
    deleteQuestion: (questionIndex: number) => () => dispatch(editActions.deleteQuestion({ questionIndex })),
    changeQuestionTitle: (questionIndex: number) => (e) =>
      dispatch(editActions.changeQuestionTitle({ questionIndex, text: e.target.value })),

    changeAnswersType: (questionIndex: number) => (e) =>
      dispatch(editActions.changeAnswersType({ value: e.target.value as AnswersType, questionIndex }))
  }
}

type QuestionProps = {
  questionIndex: number
  question: QuestionType
  deleteDisabled: boolean
}

const Question: FC<QuestionProps> = ({ questionIndex, question, deleteDisabled }) => {
  const actions = useActions()

  return (
    <Styled.QuestionCase>
      <Typography variant="h4" component="h4">
        Вопрос {questionIndex + 1}
      </Typography>
      <Styled.RowCase>
        <InputField
          label="Название"
          placeholder="Введите вопрос"
          value={question.text}
          onChange={actions.changeQuestionTitle(questionIndex)}
        />
        <DeleteButton onClick={actions.deleteQuestion(questionIndex)} disabled={deleteDisabled} />
      </Styled.RowCase>

      <Styled.RowCase>
        Тип ответов:
        <Styled.Select value={question.answersType} onChange={actions.changeAnswersType(questionIndex)}>
          <option value="radio">Один правильный</option>
          <option value="checkbox">Несколько правильных</option>
        </Styled.Select>
      </Styled.RowCase>

      <Typography variant="h6" component="h6">
        Ответы
      </Typography>

      {question.answers.map((answer: any, answerIndex: number) => (
        <Answer {...{ answerIndex, questionIndex, answer }} deleteDisabled={question.answers.length === 1} />
      ))}
      <Button variant="outlined" color="inherit" onClick={actions.addAnswer(questionIndex)} sx={{ marginTop: "6px" }}>
        Добавить Ответ
      </Button>
    </Styled.QuestionCase>
  )
}

export default Question
