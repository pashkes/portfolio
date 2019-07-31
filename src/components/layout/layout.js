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

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="body-screen">
            <div className="body-screen__row">
              <div className="body-screen__col body-screen__col--nav">
                <Menu />
              </div>
              <div className="body-screen__col">
                {children}
              </div>
            </div>
            <div className="body-screen__social">
              <Social/>
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
