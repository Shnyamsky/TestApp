import { FC } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
