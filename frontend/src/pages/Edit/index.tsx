import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { editActions } from "../../store/reducers/editTest"
import style from "./style.module.css"

const EditTestPage = () => {
  const { slug } = useParams()

  const test = useAppSelector((state) => state.editTest)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { isLoading, error, data } = useQuery("passing-test", () =>
    fetch(`http://127.0.0.1:4000/tests/${slug}`).then((res) => res.json())
  )

  const saveTest = () => {
    fetch(`http://127.0.0.1:4000/tests`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ test })
    })

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
            className={style.input}
            onChange={(e) => dispatch(editActions.changeTitle(e.target.value))}
          />
        </label>
      </div>

      {test.questions &&
        test.questions.map((question: any, questionIndex: number) => (
          <div>
            <div>
              <span>{questionIndex + 1} - </span>
              <label>
                Вопрос:
                <input
                  type="text"
                  value={question.text}
                  className={style.input}
                  onChange={(e) => dispatch(editActions.changeQuestionTitle({ questionIndex, text: e.target.value }))}
                />
              </label>
            </div>

            {question.answers.map((answer: any, answerIndex: number) => (
              <div>
                <label>
                  <span>{answerIndex + 1} - </span>
                  Ответ:
                  <input
                    type="text"
                    value={answer.text}
                    className={style.input}
                    onChange={(e) =>
                      dispatch(editActions.changeAnswerTitle({ questionIndex, answerIndex, text: e.target.value }))
                    }
                  />
                  <input
                    type="number"
                    value={answer.points}
                    className={style.input}
                    onChange={(e) => dispatch(editActions.changeQuestionTitle({ questionIndex, text: e.target.value }))}
                  />
                </label>
              </div>
            ))}
          </div>
        ))}
      <button onClick={saveTest}>Coхранить</button>
    </main>
  )
}

export default EditTestPage
