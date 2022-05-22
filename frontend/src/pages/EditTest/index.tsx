import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { editActions } from "../../store/reducers"
import { InputField } from "../../components"
import * as Styled from "./styled"
import { API } from "../../api"
import Question from "./Question"
import Condition from "./Condition"

const useActions = () => {
  const dispatch = useAppDispatch()

  return {
    changeTestTitle: (e) => dispatch(editActions.changeTitle(e.target.value)),
    resetEditState: () => dispatch(editActions.resetState(null)),
    setupTest: (data) => dispatch(editActions.setupTest(data)),
    addQuestion: () => dispatch(editActions.addQuestion(null))
  }
}

const EditTestPage = () => {
  const test = useAppSelector((state) => state.editTest)
  const navigate = useNavigate()
  const { slug } = useParams()
  const actions = useActions()
  const isExistingTest = !!slug

  useEffect(() => {
    if (isExistingTest) API.getPassingTest(slug)().then(actions.setupTest)
    else actions.resetEditState()
  }, [])

  const onSave = async () => {
    if (isExistingTest) await API.updateTest(test)
    else await API.createTest(test)

    actions.resetEditState()

    navigate("/tests")
  }

  return (
    <Styled.Container>
      <Typography variant="h3" component="h1">
        {isExistingTest ? "Редактирование" : "Создание"} теста
      </Typography>

      <InputField
        label="Название:"
        placeholder="Название теста"
        value={test.title}
        onChange={actions.changeTestTitle}
      />

      {test.questions.map((question, questionIndex: number) => (
        <Question questionIndex={questionIndex} question={question} deleteDisabled={test.questions.length === 1} />
      ))}

      <Button variant="outlined" color="inherit" onClick={actions.addQuestion} sx={{ marginBottom: "30px" }}>
        Добавить Вопрос
      </Button>

      <Typography variant="h4" component="h4">
        Результаты тестирования
      </Typography>

      {test.conditions.map((condition, conditionIndex: number) => (
        <Condition
          conditionIndex={conditionIndex}
          condition={condition}
          deleteDisabled={test.conditions.length === 1}
        />
      ))}

      <Button variant="contained" onClick={onSave}>
        {isExistingTest ? "Обновить" : "Создать"} тест
      </Button>
    </Styled.Container>
  )
}

export default EditTestPage
