import { useQuery } from "react-query"
import style from "./style.module.css"

const ResultsTablePage = () => {
  const { isLoading, error, data } = useQuery("results", () =>
    fetch("http://127.0.0.1:4000/result").then((res) => res.json())
  )

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <main className={style.container}>
      Таблица результатов
      <table>
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
      </table>
    </main>
  )
}

export default ResultsTablePage
