import { FC, useState } from "react"
import { useMutation } from "react-query"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/store"
import { userActions } from "../../store/reducers/user"
import style from "./style.module.css"

const LoginPage: FC = () => {
  const [email, changeEmail] = useState("")
  const [password, changePass] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

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

      <main className={style.loginRoot}>
        <section>
          <label className={style.inputField}>
            Email
            <input type="email" onChange={(e) => changeEmail(e.target.value)} value={email} />
          </label>
          <label className={style.inputField}>
            Пароль
            <input type="password" onChange={(e) => changePass(e.target.value)} value={password} />
          </label>

          <button className={style.loginBtn} onClick={enterAsAdmin}>Войти</button>
          <Link to="/auth"><button className={style.loginBtn}>Войти как студент</button></Link>
        </section>
      </main>
    </>
  )
}

export default LoginPage