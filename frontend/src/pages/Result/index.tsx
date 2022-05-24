import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { API } from "../../api"
import { useAppSelector } from "../../hooks/store"
import { Condition } from "../../types"
import * as Styled from "./styled"

const ResultPage = () => {
  const user = useAppSelector((state) => state.user)

  const location = useLocation() as { state: { score: number; slug: string; conditions: Condition[] } }
  const { score, slug, conditions } = location.state

  conditions.sort((a, b) => a.score - b.score)

  const resultCondition = conditions.reduce((acc, cond) => (score <= acc.score ? acc : cond))

  useEffect(() => {
    if (user.studyYear && user.studyGroup) {
      API.saveResult({
        score,
        testSlug: slug,
        text: resultCondition.text,
        student: {
          name: user.name,
          surName: user.surName,
          studyYear: user.studyYear,
          studyGroup: user.studyGroup
        }
      })
    }
  }, [])

  return (
    <Styled.MainCase>
      Результат: {score}
      <div>{resultCondition.text}</div>
      <Styled.LinkCase>
        <Link to="/tests">Обратно к опросам</Link>
      </Styled.LinkCase>
    </Styled.MainCase>
  )
}

export default ResultPage
