import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import "./field.css"

class Field extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false,
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
  }

  handleBlur = () => {
    this.setState({ isFocused: false })
  }

  render() {
    const { type = `text`, id, labelText, isRequired = false, name, pattern=`.*?`, onChange, value} = this.props
    const { isFocused} = this.state;
    return (
      <div className={`form-control ${value.length > 0 || isFocused ? `is-focused` : ``} `}>
        <label className="form-control__label" htmlFor={id}>{labelText}</label>
        <input
          type={type}
          className="form-control__field"
          id={id}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={onChange}
          value={value}
          name={name}
          required={isRequired}
          pattern={pattern}
        />
      </div>
    )
  }
}

Field.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  autofocus: PropTypes.bool,
  pattern: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Field;
