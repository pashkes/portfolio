import React, { useEffect } from "react"
import useDarkMode from 'use-dark-mode';
import Toggle from "../toggle/toggle"

import "./dark-mode-toggle.css"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true);
  useEffect(() => {
    darkMode.enable()
  }, [])
  return (
    <div className="mode">
      <button className="mode__btn mode__btn--light" type="button" onClick={darkMode.disable}>☀</button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} aria-label="Switch between Dark and Light mode" />
      <button className="mode__btn mode__btn--dark" type="button" onClick={darkMode.enable}>☾</button>
    </div>
  );
};

export default DarkModeToggle;
