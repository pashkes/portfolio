import React, { useState } from "react"
import PropTypes from "prop-types"

import "./field.css"

const Field = React.forwardRef(({ id, label, isRequired, onChange, value, className, ...attrs }, ref) => {
  const [isFocused, setFlagFocus] = useState()
  const handleFocus = () => setFlagFocus(!isFocused)
  const handleBlur = () => setFlagFocus(!isFocused)
  return (
    <div className={`form-control ${className} ${value.length > 0 || isFocused ? `is-focused` : ``} `} ref={ref}>
      <label className="form-control__label" htmlFor={id}>{label}</label>
      <input
        className={`form-control__field`}
        id={id}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={value}
        required={isRequired}
        {...attrs}
      />
    </div>
  )
})

Field.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Field.defaultProps = {
  isRequired: false,
}

export default Field
