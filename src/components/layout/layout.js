/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import "./layout.css";

import Header from "../header/header";
import Menu from "../menu/menu";
import Social from "../social/social";

const Layout = ({ children, footer, classModFooter }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="layout">
            <div className="layout__row">
              <div className="layout__col layout__col--nav">
                <Menu />
              </div>
              <div className="layout__col">
                {children}
              </div>
            </div>
            <div className={`layout__footer ${classModFooter}`}>
              <div className="layout__social">
                <Social/>
              </div>
              {footer}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
