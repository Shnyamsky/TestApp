import axios from "axios"
import React from "react"
import { useQuery } from "react-query"
import { Link, useLocation } from "react-router-dom"
import { API } from "../../api"
import style from "./style.module.css"

const TestListPage = () => {
  const { isLoading, error, data } = useQuery("tests", API.getTests)

  const location = useLocation() as { state: { isEditList: boolean } }

  const moveTo = (slug: string) => (location.state.isEditList ? `/edit/${slug}` : `/test/${slug}`)

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
              <tr className={style.testItem}>
                <td>
                  <Link to={moveTo(test.slug)} key={test._id}>
                    {test.title}
                  </Link>
                </td>

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
