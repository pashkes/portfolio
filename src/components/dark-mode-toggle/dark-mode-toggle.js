import React from "react";
import useDarkMode from "use-dark-mode";

import "./dark-mode-toggle.css";
import IconLightMode from "./../../images/icons/ligh-mode.svg";
import IconDarkMode from "./../../images/icons/dark-mode.svg";

const DarkModeToggle = () => {
  const darkMode = useDarkMode();
  console.log(darkMode.value)
  return (
    <div className='mode'>
      <label className={`toggle ${darkMode.value ? `is-dark` : `is-light`}`}>
        <input type="checkbox" className="invisible" onChange={darkMode.toggle} checked={darkMode.value}/>
        <span className="toggle-icon light"><IconLightMode /></span>
        <span className="toggle-icon dark"><IconDarkMode /></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
