import { FC, useState } from "react"
import { useMutation } from "react-query"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/store"
import { userActions } from "../../store/reducers/user"
import style from "./style.module.css"

const AuthPage: FC = () => {
  const [name, changeName] = useState("")
  const [surName, changeSurName] = useState("")
  const [email, changeEmail] = useState("")
  const [password, changePass] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const enterAsGuest = () => {
    if (!name || !surName) {
      return setError("Имя и фамилия должны быть заполнены")
    }

    setError("")
    dispatch(userActions.enterAsGuest({ name, surName }))
    navigate("/tests", { state: { isEditList: false } })
  }

  const loginMutation = useMutation((loginData: { email: string; password: string }) => {
    return fetch(`http://127.0.0.1:4000/users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: loginData })
    }).then((res) => {
      return res.json()
    })
  })

  const enterAsAdmin = () => {
    if (!email || !password) {
      return setError("Email и пароль должны быть заполнены")
    }

    setError("")

    loginMutation.mutate({ email, password })

    if (loginMutation.data.message) {
      setError(loginMutation.data.message)
    }

    dispatch(userActions.enterAsAdmin({ ...loginMutation.data }))
    navigate("/tests", { state: { isEditList: false } })
  }

  return (
    <>
      {(error || loginMutation.data?.message) && (
        <div className={style.error}>{error || (loginMutation.data as any).message}</div>
      )}

      <main className={style.authRoot}>
        <section>
          <label className={style.inputField}>
            Имя
            <input type="text" onChange={(e) => changeName(e.target.value)} value={name} />
          </label>
          <label className={style.inputField}>
            Фамилия
            <input type="text" onChange={(e) => changeSurName(e.target.value)} value={surName} />
          </label>

          <button className={style.authBtn} onClick={enterAsGuest}>Войти</button>
          <a href="/">Войти как преподаватель</a>
        </section>

        <section>
          <label className={style.inputField}>
            Email
            <input type="email" onChange={(e) => changeEmail(e.target.value)} value={email} />
          </label>
          <label className={style.inputField}>
            Пароль
            <input type="password" onChange={(e) => changePass(e.target.value)} value={password} />
          </label>

          <button className={style.authBtn} onClick={enterAsAdmin}>Войти</button>
          <a href="/">Войти как гость</a>
        </section>
      </main>
    </>
  )
}

export default AuthPage
