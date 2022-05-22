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
          <Styled.Label>
            <Styled.Input
              type="email"
              placeholder="Введите email"
              onChange={(e) => changeEmail(e.target.value)}
              value={email}
            />
          </Styled.Label>
          <Styled.Label>
            <Styled.Input
              type="password"
              placeholder="Введите пароль"
              onChange={(e) => changePass(e.target.value)}
              value={password}
            />
          </Styled.Label>
          <Styled.Button onClick={enterAsAdmin}>
            Войти
          </Styled.Button>
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
