import React from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/store"
import { API } from "../../api"
import { useNavigate } from "react-router-dom"
import AdminControls from "./AdminControls"
import { Test } from "../../types"

import Table from "@mui/material/Table"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import AddIcon from "@mui/icons-material/Add"

const useFetchState = () => ({
  isAdmin: useAppSelector((state) => state.user.isAdmin)
})

const TestListPage = () => {
  const { isLoading, data, refetch } = useQuery("tests", API.getTests)
  const navigate = useNavigate()
  const { isAdmin } = useFetchState()

  return (
    <main>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <Paper sx={{ width: "100%", mb: 2 }}>
          <Toolbar
            sx={{
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 }
            }}
          >
            <Typography sx={{ flex: "1 1 70%" }} variant="h6" id="tableTitle" component="div">
              Тесты
            </Typography>

            {isAdmin && (
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate("/edit")}>
                Добавить тест
              </Button>
            )}
          </Toolbar>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Название</TableCell>
                  <TableCell>Кол-во вопросов</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((test: Test) => (
                  <TableRow>
                    <TableCell>
                      <Link to={`/test/${test.slug}`}>{test.title}</Link>
                    </TableCell>
                    <TableCell>{test.questions.length}</TableCell>
                    {isAdmin && <AdminControls {...test} refetchTests={refetch} />}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </main>
  )
}

export default TestListPage
