import React from "react"
import classNames from "classnames"

import "./toggle.css"

const Toggle = ({className, onChange, ...attrs }) => {
  const classes = classNames(
    `toggle`,
    className,
  )
  return (
    <label className={classes}>
      <input type="checkbox" className="toggle__input invisible" {...attrs} onChange={onChange}/>
      <span className="toggle__circle" aria-hidden="true"/>
    </label>
  )
}

export default Toggle
