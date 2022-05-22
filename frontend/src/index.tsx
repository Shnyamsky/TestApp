import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { QueryClient, QueryClientProvider } from "react-query"

import App from "./App"
import { store } from "./store"
import * as serviceWorker from "./serviceWorker"
import { globalStyles } from "./styled"
import { Global } from "@emotion/react"

const queryClient = new QueryClient()

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6571b9"
    },
    secondary: {
      main: "#E9EBF3"
    },
    background: {
      default: "#e8eaf6",
      paper: "rgba(0, 0, 0, 0.3)"
    },
    text: {
      primary: "#E9EBF3"
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyles} />
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
