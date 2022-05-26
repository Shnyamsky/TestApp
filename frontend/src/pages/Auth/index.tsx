import { FC, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/store"
import { userActions } from "../../store/reducers/user"
import { Student } from "../../types"
import * as Styled from "./styled"

const DEFAULT: Student = { name: "", surName: "", studyYear: new Date().getFullYear(), studyGroup: "" }

const AuthPage: FC = () => {
  const [state, setState] = useState(DEFAULT)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const changeState = (event) => setState({ ...state, [event.target.name]: event.target.value })

  const enterAsGuest = () => {
    if (!Object.values(state).some(Boolean)) {
      return setError("Все поля должны быть заполнены")
    }

    setError("")
    dispatch(userActions.enterAsGuest(state))
    navigate("/tests")
  }

  return (
    <>
      <Styled.MainCase>
        <Styled.SectionCase>
          Студент
          <Styled.Label>
            <Styled.Input type="text" placeholder="Введите Имя" onChange={changeState} name="name" value={state.name} />
          </Styled.Label>
          <Styled.Label>
            <Styled.Input
              type="text"
              placeholder="Введите Фамилию"
              onChange={changeState}
              name="surName"
              value={state.surName}
            />
          </Styled.Label>
          <Styled.Label>
            <Styled.Input
              type="text"
              placeholder="Учебная группа"
              onChange={changeState}
              name="studyGroup"
              value={state.studyGroup}
            />
          </Styled.Label>
          <Styled.Label>
            <Styled.Input
              type="number"
              placeholder="Год зачисления"
              onChange={changeState}
              name="studyYear"
              value={state.studyYear}
            />
          </Styled.Label>
          <Styled.Button onClick={enterAsGuest}>Войти</Styled.Button>
          <Styled.LinkCase>
            <Link to="/login">Войти как преподаватель</Link>
          </Styled.LinkCase>
        </Styled.SectionCase>

        <Styled.ErrorCase>{error}</Styled.ErrorCase>
      </Styled.MainCase>
    </>
  )
}

export default AuthPage
