import React from "react";
import PropTypes from "prop-types";

import "./layout.css";
import Header from "../components/header/header";
import Menu from "../components/menu/menu";
import Social from "../components/social/social";
import ContactList from "../components/contact-list/contact-list";
import AnimationCubes from "./animation-cubes";

const Layout = ({children, uri}) => (
  <div className={`page-wrapper`}>
    <AnimationCubes />
    <div className='container'>
      <div className='wrapper'>
        <Header />
        <main>
          <div className='layout'>
            <div className='layout__row'>
              <div className='layout__col layout__col--nav'>
                <Menu />
              </div>
              <div className='layout__col' aria-live='polite' role='banner'>
                {children}
              </div>
            </div>
            <div
              className={`layout__footer ${
                uri === `/contacts` || uri === `/success-sent`
                  ? `layout__footer--page-contact`
                  : ``
              }`}>
              <div className='layout__social'>
                <Social />
              </div>
              {uri === `/contacts` && <ContactList />}
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
