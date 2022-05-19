import axios from "axios"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { API } from "../../api"
import { useAppSelector } from "../../hooks/store"
import * as Styled from "./styled"

const ResultPage = () => {
  const name = useAppSelector((state) => state.user.name)

  const location = useLocation() as { state: { score: number; testName: string } }
  const { score, testName } = location.state

  useEffect(() => {
    API.saveResult({ score, name, testName })
  }, [])

  const showAnswer = () => {
    if (score <= 17) return "Вы не набрали достаточно баллов"

    if (score <= 25) return "Ваш результат очень низкий"

    if (score <= 28) return "Ваш результат низкий"

    if (score <= 31) return "Ваш результат ниже среднего"

    if (score <= 34) return "Ваш результат чуть ниже среднего"

    if (score <= 37) return "Ваш результат средний"

    if (score <= 40) return "Ваш результат чуть выше среднего"

    if (score <= 43) return "Ваш результат выше среднего"

    if (score <= 46) return "Ваш результат высокий"

    if (score <= 54) return "Ваш результат очень высокий"

    return "Вы прошли опрос"
  }

  return (
    <Styled.MainCase>
      Результат: {score}
      <div>{showAnswer()}</div>
      <Styled.LinkCase>
        <Link to="/tests" state={{ isEditList: false }}>
          Обратно к опросам
        </Link>
      </Styled.LinkCase>
    </Styled.MainCase>
  )
}

export default ResultPage
