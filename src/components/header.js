import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"
import Image from "./image"

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div style={{ maxWidth: `180px` }}>
          <Image assetUrl="logo.png" alt="logo" />
        </div>
      </Link>
    </header>
  )
}
