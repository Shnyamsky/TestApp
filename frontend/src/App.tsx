import React, { useEffect } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router"

import { useAppDispatch, useAppSelector } from "./hooks/store"
import Layout from "./layout"

import AuthPage from "./pages/Auth"
import LoginPage from "./pages/Login"
import PassingTestPage from "./pages/PassingTest"
import ResultPage from "./pages/Result"
import ResultsTablePage from "./pages/ResultsTable"
import TestListPage from "./pages/TestList"
import { userActions } from "./store/reducers/user"
import EditTestPage from "./pages/EditTest"
import { AppContainer } from "./styled"

const useActions = () => {
  const dispatch = useAppDispatch()

  return {
    loginFromStorage: (payload) => dispatch(userActions.loginFromStorage(payload))
  }
}

function App() {
  const isAuthorized = useAppSelector((state) => state.user.isAuthorized)
  const actions = useActions()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const notAuthOrLoginPage = location.pathname !== "/auth" && location.pathname !== "/login"

    if (!isAuthorized && notAuthOrLoginPage) {
      const authStorage = sessionStorage.getItem("auth")

      if (authStorage) {
        actions.loginFromStorage(JSON.parse(authStorage))
        navigate("/tests")

        return
      }

      navigate("/auth")
    }
  }, [])

  return (
    <AppContainer>
      <Layout>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tests" element={<TestListPage />} />
          <Route path="/edit" element={<EditTestPage />} />
          <Route path="/edit/:slug" element={<EditTestPage />} />
          <Route path="/test/:slug" element={<PassingTestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/result/:slug" element={<ResultsTablePage />} />
        </Routes>
      </Layout>
    </AppContainer>
  )
}

export default App
