import {Link} from "gatsby";
import React from "react";
import "./header.css";
import Menu from "../menu/menu";
import DarkModeToggle from "../dark-mode-toggle/dark-mode-toggle";
const Header = () => {
  return (
    <header className="header">
      <div className="header__top-panel">
        <h1 className="header__logo">
          <Link to={`/`}>PavelTarasenko</Link>
        </h1>
        <DarkModeToggle />
      </div>
      <Menu />
    </header>
  );
};
export default Header;
