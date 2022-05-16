import { FC, useState } from "react"
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

  return (
    <>
      <main className={style.authRoot}>
        <section>
          Студент
          <label className={style.inputField}>
            <input
              type="text"
              placeholder="Введите Имя"
              onChange={(e) => changeName(e.target.value)}
              value={name}
            />
          </label>
          <label className={style.inputField}>
            <input
              type="text"
              placeholder="Введите Фамилию"
              onChange={(e) => changeSurName(e.target.value)}
              value={surName}
            />
          </label>
          <button className={style.authBtn} onClick={enterAsGuest}>
            Войти
          </button>
          <Link className={style.authLink} to="/login">
            Войти как преподаватель
          </Link>
        </section>
        {error}
      </main>
    </>
  )
}

export default AuthPage
