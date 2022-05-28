import { useCallback, useRef } from "react"
import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"
import * as XLSX from "xlsx"

import { API } from "../../api"
import { Result } from "../../types"
import * as Styled from "./styled"

const ResultsTablePage = () => {
  const { slug } = useParams()
  const tableRef = useRef<HTMLTableElement>(null)
  const { isLoading, data } = useQuery("results", API.getCurrentResults(slug))

  const xport = useCallback(() => {
    const table = tableRef.current
    const wb = XLSX.utils.table_to_book(table)

    XLSX.writeFile(wb, `Результаты ${data[0].testSlug}.xlsx`)
  }, [data])

  if (isLoading) {
    return <div>Загрузка...</div>
  }
  return (
    <Styled.MainCase>
      Таблица результатов
      <button onClick={xport}>скачать в excel</button>
      <Styled.TableCase ref={tableRef}>
        <thead>
          <tr>
            <th>Студент</th>
            <th>Группа</th>
            <th>Год</th>
            <th>Баллы</th>
            <th>Результат</th>
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
