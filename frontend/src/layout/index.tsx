import { Container, Box } from "@mui/material"
import { FC } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box mt={"128px"} mb={"64px"}>
        <Container>{children}</Container>
      </Box>
      <Footer />
    </>
  )
}

export default Layout
