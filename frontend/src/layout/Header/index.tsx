import { FC } from "react"
import { Link } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import * as Styled from "./styled"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { userActions } from "../../store/reducers"

const Header: FC = () => {
  const { name, surName, isAuthorized } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const logout = () => dispatch(userActions.logout())

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ alignItems: "center" }}>
        {isAuthorized && (
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1, textAlign: "left" }}>
            {name} {surName}
          </Typography>
        )}

        <Box sx={{ display: "flex", gap: "15px" }}>
          {isAuthorized && (
            <Styled.HeaderLinkCase>
              <Link to="/auth">
                <Button color="inherit" onClick={logout}>
                  Выйти
                </Button>
              </Link>
            </Styled.HeaderLinkCase>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
