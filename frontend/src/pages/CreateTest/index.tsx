import { useNavigate } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { editActions } from "../../store/reducers/editTest"
import { AnswerField, InputField } from "../../components"
import * as Styled from "./styled"
import { API } from "../../api"

const CreateTestPage = () => {
  const test = useAppSelector((state) => state.editTest)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const createTest = () => {
    API.createTest(test)
    dispatch(editActions.resetState())

    navigate("/tests", { state: { isEditList: false } })
  }

  return (
    <Styled.Container>
      <h2>Создание теста</h2>
      <InputField
        label="Название теста:"
        placeholder="Название теста"
        value={test.title}
        onChange={(e) => dispatch(editActions.changeTitle(e.target.value))}
      />
      {test.questions?.map((question: any, questionIndex: number) => (
        <div>
          <Styled.RowCase>
            <InputField
              label={`Вопрос ${questionIndex + 1}`}
              placeholder="Введите вопрос"
              value={question.text}
              onChange={(e) => dispatch(editActions.changeQuestionTitle({ questionIndex, text: e.target.value }))}
            />
            <button
              onClick={() => dispatch(editActions.deleteQuestion({ questionIndex }))}
              disabled={test.questions.length === 1}
            >
              &#10006;
            </button>

            <select
              onChange={(e) =>
                dispatch(
                  editActions.changeAnswersType({ value: e.target.value as "checkbox" | "radio", questionIndex })
                )
              }
            >
              <option value="radio">Один правильный</option>
              <option value="checkbox">Несколько правильных</option>
            </select>
          </Styled.RowCase>

          {question.answers.map((answer: any, answerIndex: number) => (
            <Styled.RowCase>
              <AnswerField
                label={`Ответ ${answerIndex + 1}`}
                answerText={answer.text}
                onChangeAnswerText={(e) =>
                  dispatch(
                    editActions.changeAnswerTitle({
                      questionIndex,
                      answerIndex,
                      text: e.target.value
                    })
                  )
                }
                points={answer.points}
                onChangePoints={(e) =>
                  dispatch(
                    editActions.changeAnswerPoints({
                      questionIndex,
                      answerIndex,
                      points: Number(e.target.value)
                    })
                  )
                }
              />
              <button
                onClick={() => dispatch(editActions.deleteAnswer({ questionIndex, answerIndex }))}
                disabled={question.answers.length === 1}
              >
                &#10006;
              </button>
            </Styled.RowCase>
          ))}
          <a onClick={() => dispatch(editActions.addAnswer(questionIndex))}>Добавить Ответ</a>
        </div>
      ))}
      <a onClick={() => dispatch(editActions.addQuestion())}>Добавить Вопрос</a>

      <button onClick={createTest}>Создать тест</button>
    </Styled.Container>
  )
}

export default CreateTestPage
