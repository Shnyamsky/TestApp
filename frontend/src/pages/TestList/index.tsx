import React from "react"
import { useQuery } from "react-query"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { API } from "../../api"
import * as Styled from "./styled"

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
        <Styled.TableCase>
          <thead>
            <tr>
              <th>Название</th>
              <th>Кол-во вопросов</th>
            </tr>
          </thead>
          <tbody>
            {data.map((test: { title: string; _id: string; questions: string[]; slug: string }) => (
              <tr>
                <td><Link to={moveTo(test.slug)}>{test.title}</Link></td>
                <td>{test.questions.length}</td>
              </tr>
            ))}
          </tbody>
        </Styled.TableCase>
      )}
    </main>
  )
}

export default TestListPage
