import axios from "axios"
import { useQuery } from "react-query"
import { API } from "../../api"
import * as Styled from "./styled"

const ResultsTablePage = () => {
  const { isLoading, error, data } = useQuery("results", API.getResults)

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <Styled.MainCase>
      Таблица результатов
      <Styled.TableCase>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Опрос</th>
            <th>Результат</th>
          </tr>
        </thead>
        <tbody>
          {data.map((result: { name: string; testName: string; score: number }, index: number) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>{result.testName}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </Styled.TableCase>
      </Styled.MainCase>
  )
}

export default ResultsTablePage
