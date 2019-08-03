import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import "./menu.css";

const Menu = ({classMod}) => {
  return (
    <nav className={`menu ${classMod}`}>
      <ul className="menu__list">
        <li className="menu__item">
          <Link className={`menu__link`} activeClassName="is-active" to={`/about`}>About</Link>
        </li>
        <li className="menu__item">
          <Link className={`menu__link`} partiallyActive={true} activeClassName="is-active" to={`/work`}>Work</Link>
        </li>
        <li className="menu__item">
          <Link className={`menu__link`} activeClassName="is-active" to={`/skills`}>Skills</Link>
        </li>
        <li className="menu__item">
          <Link className={`menu__link`} activeClassName="is-active" to={`/contacts`}>Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}
Menu.defaultProps = {
  classMod: ``
}
Menu.propTypes = {
  classMod: PropTypes.string,
}
export default Menu
