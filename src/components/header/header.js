import { Link } from "gatsby"
import React from "react"

import "./header.css"
import Menu from "../menu/menu"

const Header = () => (
  <header className="header">
    <Link to={`/`} className="header__logo">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/img/logo-lg.svg"/>
        <img src="/img/logo.svg" width={144} height={11} alt="Logo"/>
      </picture>
    </Link>
    <Menu/>
  </header>
)

export default Header
