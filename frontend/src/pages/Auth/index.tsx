import { FC, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/store"
import { userActions } from "../../store/reducers/user"
import * as Styled from "./styled"

const AuthPage: FC = () => {
  const [name, changeName] = useState("")
  const [surName, changeSurName] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const enterAsGuest = () => {
    if (!name || !surName) {
      return setError("Имя и фамилия должны быть заполнены")
    }

    setError("")
    dispatch(userActions.enterAsGuest({ name, surName }))
    navigate("/tests")
  }

  return (
    <>
      <Styled.MainCase>
        <Styled.SectionCase>
          Студент
          <Styled.Label>
            <Styled.Input
              type="text"
              placeholder="Введите Имя"
              onChange={(e) => changeName(e.target.value)}
              value={name}
            />
          </Styled.Label>
          <Styled.Label>
            <Styled.Input
              type="text"
              placeholder="Введите Фамилию"
              onChange={(e) => changeSurName(e.target.value)}
              value={surName}
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
