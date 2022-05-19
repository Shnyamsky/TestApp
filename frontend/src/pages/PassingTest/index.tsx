import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { API } from "../../api"
import * as Styled from "./styled"

const PassingTestPage = () => {
  const { slug } = useParams()

  const { isLoading, error, data } = useQuery("passing-test", API.getPassingTest(slug))

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
    <Styled.MainCase>
      <Styled.H4Case>
        {data.title}. Вoпрос {current + 1} / {data.questions.length}
      </Styled.H4Case>
      <h3>{data.questions[current].text}</h3>

      {data.questions[current].answers.map((answer: { text: string; points: number }) => (
        <Styled.AnswerCase key={answer.text}>
          <input type="checkbox" onChange={onChangeCheckbox(answer.points)} />
          {answer.text}
        </Styled.AnswerCase>
      ))}

      <Styled.ButtonCase onClick={onNextBtnClick}>
        Следующий вопрос
      </Styled.ButtonCase>
      <Styled.ErrorCase>
          {error}
        </Styled.ErrorCase>
    </Styled.MainCase>
  )
}

export default PassingTestPage
