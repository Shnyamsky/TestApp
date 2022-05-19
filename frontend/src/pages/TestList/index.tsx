import React from "react"
import { useQuery } from "react-query"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { API } from "../../api"
import style from "./style.module.css"

const TestListPage = () => {
  const { isLoading, error, data } = useQuery("tests", API.getTests)
  const navigate = useNavigate()

  const location = useLocation() as { state: { isEditList: boolean } }

  const moveTo = (slug: string) => {
    return location.state.isEditList ? `/edit/${slug}` : `/test/${slug}`
  }

  return (
    <main>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Кол-во вопросов</th>
            </tr>
          </thead>
          <tbody>
            {data.map((test: { title: string; _id: string; questions: string[]; slug: string }) => (
              <tr className={style.testItem} onClick={() => navigate(moveTo(test.slug))}>
                <td>{test.title}</td>

                <td>{test.questions.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}

export default TestListPage
