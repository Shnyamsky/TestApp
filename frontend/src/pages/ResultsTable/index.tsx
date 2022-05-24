import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"

import { API } from "../../api"
import { Result } from "../../types"
import * as Styled from "./styled"

const ResultsTablePage = () => {
  const { slug } = useParams()
  const { isLoading, data } = useQuery("results", API.getCurrentResults(slug))

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <Styled.MainCase>
      Таблица результатов
      <Styled.TableCase>
        <thead>
          <tr>
            <th>Студент</th>
            <th>Группа</th>
            <th>Год</th>
            <th>Результат</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data.map((result: Result, index: number) => (
            <tr key={index}>
              <td>{result.student.name + " " + result.student.surName}</td>
              <td>{result.student.studyGroup}</td>
              <td>{result.student.studyYear}</td>
              <td>{result.score}</td>
              <td>{result.text}</td>
            </tr>
          ))}
        </tbody>
      </Styled.TableCase>
      <Link to="/tests">Обратно к опросам</Link>
    </Styled.MainCase>
  )
}

export default ResultsTablePage
