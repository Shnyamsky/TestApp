import { useEffect } from "react"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { editActions } from "../../store/reducers/editTest"
import style from "./style.module.css"
import { API } from "../../api"
import { AnswerField, InputField } from "../../components"

const EditTestPage = () => {
  const { slug } = useParams()

  const test = useAppSelector((state) => state.editTest)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { isLoading, error, data } = useQuery("passing-test", API.getPassingTest(slug), {
    onSuccess: () => dispatch(editActions.setupTest(data))
  })

  const saveTest = () => {
    API.saveTest(test)

    navigate("/tests", { state: { isEditList: false } })
  }

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <main className={style.container}>
      <h2>Редактирование теста</h2>
      <InputField
        label="Название теста:"
        placeholder="Название теста"
        value={test.title}
        onChange={(e) => dispatch(editActions.changeTitle(e.target.value))}
      />

      {test.questions?.map((question: any, questionIndex: number) => (
        <div className={style.editBlock}>
          <InputField
            label={`Вопрос ${questionIndex + 1}`}
            placeholder="Введите вопрос"
            value={question.text}
            onChange={(e) =>
              dispatch(editActions.changeQuestionTitle({ questionIndex, text: e.target.value }))
            }
          />

          {question.answers.map((answer: any, answerIndex: number) => (
            <div>
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
