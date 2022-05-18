import { FC } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/store"
import style from "./style.module.css"

const Header: FC = () => {
  const { name, surName, isAuthorized, isAdmin } = useAppSelector((state) => state.user)

  return (
    <header className={style.header}>
      {isAuthorized && (
        <div className={style.headerData}>
          {name} {surName}
        </div>
      )}

      {isAuthorized && (
        <Link className={style.headerLink} to="/tests" state={{ isEditList: false }}>
          Опросы
        </Link>
      )}

      {isAdmin && (
        <Link className={style.headerLink} to="/tests" state={{ isEditList: true }}>
          Редактирование
        </Link>
      )}

      {isAdmin && (
        <Link className={style.headerLink} to="/results-table">
          Результаты
        </Link>
      )}
    </header>
  )
}

export default Header
