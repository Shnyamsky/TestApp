import React, { useEffect } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router"

import { useAppSelector } from "./hooks/store"
import Layout from "./layout"

import AuthPage from "./pages/Auth"
import LoginPage from "./pages/Login"
import EditTestPage from "./pages/Edit"
import PassingTestPage from "./pages/PassingTest"
import ResultPage from "./pages/Result"
import ResultsTablePage from "./pages/ResultsTable"
import TestListPage from "./pages/TestList"
import CreateTestPage from "./pages/CreateTest"
import { AppContainer } from "./styled"

function App() {
  const isAuthorized = useAppSelector((state) => state.user.isAuthorized)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const notAuthOrLoginPage = location.pathname !== "/auth" && location.pathname !== "/login"

    if (!isAuthorized && notAuthOrLoginPage) {
      navigate("/auth")
    }
  })

  return (
    <AppContainer>
      <Layout>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tests" element={<TestListPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/create" element={<CreateTestPage />} />
          <Route path="/test/:slug" element={<PassingTestPage />} />
          <Route path="/edit/:slug" element={<EditTestPage />} />
          <Route path="/results-table" element={<ResultsTablePage />} />
        </Routes>
      </Layout>
    </AppContainer>
  )
}

export default App
