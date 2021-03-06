import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const AppContainer = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  background-image: linear-gradient(-90deg, #c1d7ed, #3a52a2);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
`

export const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    line-height: 18px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  a {
    color: white;
  }

  * {
    box-sizing: border-box;
  }
`
