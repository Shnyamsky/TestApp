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
  const [disable, setDisable] = useState(true)

  const navigate = useNavigate()

  const onChangeCheckbox = (points: number) => (e: any) => {
    setScore(e.target.checked ? score + points : score - points)
    setDisable(e.target.checked === false)
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
      <Styled.H4>
        {data.title}. Вoпрос {current + 1} / {data.questions.length}
      </Styled.H4>
      <h3>{data.questions[current].text}</h3>

      {data.questions[current].answers.map((answer: { text: string; points: number }) => (
        <Styled.Label key={answer.text}>
          {console.log(data.questions[current].answersType, "answersType")}
          <input type={data.questions[current].answersType} onChange={onChangeCheckbox(answer.points)} name="answers" />
          {answer.text}
        </Styled.Label>
      ))}

      <Styled.Button onClick={onNextBtnClick} disabled={disable}>
        {(current + 1 === data.questions.length) ? 'Завершить' : 'Следующий вопрос'}
      </Styled.Button>
      <Styled.ErrorCase>
          {error}
        </Styled.ErrorCase>
    </Styled.MainCase>
  )
}

export default PassingTestPage
