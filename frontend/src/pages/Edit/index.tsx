import { useEffect } from "react"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { editActions } from "../../store/reducers/editTest"
import style from "./style.module.css"
import { API } from "../../api"

const EditTestPage = () => {
  const { slug } = useParams()

  const test = useAppSelector((state) => state.editTest)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { isLoading, error, data } = useQuery("passing-test", API.getPassingTest(slug))

  const saveTest = () => {
    API.saveTest(test)

    navigate("/tests", { state: { isEditList: false } })
  }

  useEffect(() => {
    if (data) {
      dispatch(editActions.setupTest(data))
    }
  }, [])

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <main className={style.container}>
      <h2>Редактирование опроса</h2>
      <div>
        <label>
          Название опроса:
          <input
            type="text"
            value={test.title}
            className={style.inputTest}
            onChange={(e) => dispatch(editActions.changeTitle(e.target.value))}
          />
        </label>
      </div>

      {test.questions &&
        test.questions.map((question: any, questionIndex: number) => (
          <div className={style.editBlock}>
            <div>
              <label>
                Вопрос
                <span> {questionIndex + 1}: </span>
                <input
                  type="text"
                  value={question.text}
                  className={style.inputQues}
                  onChange={(e) => dispatch(editActions.changeQuestionTitle({ questionIndex, text: e.target.value }))}
                />
              </label>
            </div>

            {question.answers.map((answer: any, answerIndex: number) => (
              <div>
                <label>
                  Ответ
                  <span> {answerIndex + 1}: </span>
                  <input
                    type="text"
                    value={answer.text}
                    className={style.inputAns}
                    onChange={(e) =>
                      dispatch(
                        editActions.changeAnswerTitle({
                          questionIndex,
                          answerIndex,
                          text: e.target.value
                        })
                      )
                    }
                  />
                  <input
                    type="number"
                    value={answer.points}
                    className={style.inputNum}
                    onChange={(e) => dispatch(editActions.changeQuestionTitle({ questionIndex, text: e.target.value }))}
                  />
                </label>
              </div>
            ))}
          </div>
        ))}
      <button className={style.editBtn} onClick={saveTest}>
        Coхранить
      </button>
      {error}
    </main>
  )
}

export default EditTestPage
