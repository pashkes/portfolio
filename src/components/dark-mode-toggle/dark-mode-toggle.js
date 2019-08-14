import React from "react";
import {ThemeToggler} from "gatsby-plugin-dark-mode";

import "./dark-mode-toggle.css";
import IconLightMode from "./../../images/icons/ligh-mode.svg";
import IconDarkMode from "./../../images/icons/dark-mode.svg";

const DarkModeToggle = () => {
  return (
    <ThemeToggler className={`mode`}>
      {({theme, toggleTheme}) => (
        <label className='toggle'>
          <input
            className='invisible'
            type='checkbox'
            onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
            aria-label='Switch between Dark and Light mode'
          />{" "}
          <span className='toggle-icon light'>
            <IconLightMode aria-hidden='true' width={22} height={22} />
          </span>
          <span className='toggle-icon dark'>
            <IconDarkMode aria-hidden='true' width={18} height={18} />
          </span>
        </label>
      )}
    </ThemeToggler>
  );
};

export default DarkModeToggle;
