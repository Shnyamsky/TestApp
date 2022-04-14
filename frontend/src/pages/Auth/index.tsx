import { FC, useState } from "react"
import { useMutation } from "react-query"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/store"
import { userActions } from "../../store/reducers/user"
import style from "./style.module.css"

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
          <Link to="/login"><button className={style.authBtn}>Войти как преподаватель</button></Link>
        </section>
      </main>
    </>
  )
}

export default AuthPage
