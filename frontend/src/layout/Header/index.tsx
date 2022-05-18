import { FC } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/store"
import * as Styled from "./styled"

const Header: FC = () => {
  const { name, surName, isAuthorized, isAdmin } = useAppSelector((state) => state.user)

  return (
    <Styled.Header>
      {isAuthorized && (
        <Styled.UserInfo>
          {name} {surName}
        </Styled.UserInfo>
      )}

      {isAuthorized && (
        <Styled.HeaderLinkCase>
          <Link to="/tests" state={{ isEditList: false }}>
            Опросы
          </Link>
        </Styled.HeaderLinkCase>
      )}

      {isAdmin && (
        <Styled.HeaderLinkCase>
          <Link to="/tests" state={{ isEditList: true }}>
            Редактирование
          </Link>
        </Styled.HeaderLinkCase>
      )}

      {isAdmin && (
        <Styled.HeaderLinkCase>
          <Link to="/results-table">Результаты</Link>
        </Styled.HeaderLinkCase>
      )}
    </Styled.Header>
  )
}

export default Header
