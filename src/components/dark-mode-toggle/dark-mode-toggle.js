import React from "react";
import useDarkMode from "use-dark-mode";

import "./dark-mode-toggle.css";
import IconLightMode from "./../../images/icons/ligh-mode.svg";
import IconDarkMode from "./../../images/icons/dark-mode.svg";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  return (
    <div className='mode'>
      <button
        className={`mode__btn mode__btn--light ${
          darkMode.value === false ? `is-active` : ``
        }`}
        type='button'
        onClick={darkMode.toggle}>
        <IconLightMode />
      </button>
      <button
        className={`mode__btn mode__btn--dark ${
          darkMode.value === true ? `is-active` : ``
        }`}
        type='button'
        onClick={darkMode.toggle}>
        <IconDarkMode />
      </button>
    </div>
  );
};

export default DarkModeToggle;
