import { useState } from "react"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import style from "./style.module.css"

const PassingTestPage = () => {
  const { slug } = useParams()

  const { isLoading, error, data } = useQuery("passing-test", () =>
    fetch(`http://127.0.0.1:4000/tests/${slug}`).then((res) => res.json())
  )

  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)

  const navigate = useNavigate()

  const onChangeCheckbox = (points: number) => (e: any) => {
    setScore(e.target.checked ? score + points : score - points)
  }

  const onNextBtnClick = () => {
    const next = current + 1
    if (next === data.questions.length) {
      navigate("/result", { state: { score, testName: data.title }, replace: true })

      return
    }

    setCurrent(next)
  }

  if (!data || isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <main className={style.testContainer}>
      <h4>
        {data.title}. Вoпрос {current + 1} / {data.questions.length}
      </h4>
      <h3>{data.questions[current].text}</h3>

      {data.questions[current].answers.map((answer: { text: string; points: number }) => (
        <label className={style.answerCase} key={answer.text}>
          <input type="checkbox" onChange={onChangeCheckbox(answer.points)} />
          {answer.text}
        </label>
      ))}

      <button className={style.nextBtn} onClick={onNextBtnClick}>
        Следующий вопрос
      </button>
      {error}
    </main>
  )
}

export default PassingTestPage
