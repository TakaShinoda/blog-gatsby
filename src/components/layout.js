import React from "react"
import "../styles/layout.css"
import { Header } from "./header"
import { Footer } from "./footer"

export const Layout = ({ children, home }) => {
  console.log(home)
  return (
    <div className="layout">
      {!home && <Header />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}
