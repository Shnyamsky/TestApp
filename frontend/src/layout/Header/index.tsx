import { FC } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/store"
import style from "./style.module.css"

const Header: FC = () => {
  const { name, surName, isAuthorized, isAdmin } = useAppSelector((state) => state.user)

  return (
    <header className={style.header}>
      {isAuthorized && (
        <div>
          {name} {surName}
        </div>
      )}

      {isAuthorized && (
        <Link to="/tests" state={{ isEditList: false }}>
          Опросы
        </Link>
      )}

      {isAdmin && <Link to="/results-table">Результаты</Link>}

      {isAdmin && (
        <Link to="/tests" state={{ isEditList: true }}>
          Редактирование
        </Link>
      )}
    </header>
  )
}

export default Header
