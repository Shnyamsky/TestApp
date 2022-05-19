import axios from "axios"
import { FC, useState } from "react"
import { useMutation } from "react-query"
import { Link, useNavigate } from "react-router-dom"
import { API } from "../../api"
import { useAppDispatch } from "../../hooks/store"
import { userActions } from "../../store/reducers/user"
import * as Styled from "./styled"

const LoginPage: FC = () => {
  const [email, changeEmail] = useState("")
  const [password, changePass] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onSuccessEnter = (data) => {
    if (data.message) {
      setError(data.message)
    }

    dispatch(userActions.enterAsAdmin({ ...data.user }))
    navigate("/tests", { state: { isEditList: false } })
  }

  const loginMutation = useMutation(API.loginRequest, { onSuccess: onSuccessEnter })

  const enterAsAdmin = () => {
    if (!email || !password) {
      return setError("Email и пароль должны быть заполнены")
    }

    setError("")

    loginMutation.mutate({ email, password })
  }

  return (
    <>
      {(error || loginMutation.data?.message) && (
        <Styled.ErrorCase>{error || (loginMutation.data as any).message}</Styled.ErrorCase>
      )}

      <Styled.MainCase>
        <Styled.SectionCase>
          Преподаватель
          <Styled.LabelCase>
            <input
              type="email"
              placeholder="Введите email"
              onChange={(e) => changeEmail(e.target.value)}
              value={email}
            />
          </Styled.LabelCase>
          <Styled.LabelCase>
            <input
              type="password"
              placeholder="Введите пароль"
              onChange={(e) => changePass(e.target.value)}
              value={password}
            />
          </Styled.LabelCase>
          <Styled.ButtonCase onClick={enterAsAdmin}>
            Войти
          </Styled.ButtonCase>
          <Styled.LinkCase>
            <Link to="/auth">
              Войти как студент
            </Link>
          </Styled.LinkCase>
        </Styled.SectionCase>
      </Styled.MainCase>
    </>
  )
}

export default LoginPage
