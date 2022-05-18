import axios from "axios"
import { FC, useState } from "react"
import { useMutation } from "react-query"
import { Link, useNavigate } from "react-router-dom"
import { API } from "../../api"
import { useAppDispatch } from "../../hooks/store"
import { userActions } from "../../store/reducers/user"
import style from "./style.module.css"

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
        <div className={style.error}>{error || (loginMutation.data as any).message}</div>
      )}

      <main className={style.loginRoot}>
        <section>
          Преподаватель
          <label className={style.inputField}>
            <input
              type="email"
              placeholder="Введите email"
              onChange={(e) => changeEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className={style.inputField}>
            <input
              type="password"
              placeholder="Введите пароль"
              onChange={(e) => changePass(e.target.value)}
              value={password}
            />
          </label>
          <button className={style.loginBtn} onClick={enterAsAdmin}>
            Войти
          </button>
          <Link className={style.loginLink} to="/auth">
            Войти как студент
          </Link>
        </section>
      </main>
    </>
  )
}

export default LoginPage
