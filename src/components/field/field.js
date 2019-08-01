import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import "./field.css"

class Field extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: ``,
      filled: false,
    };
    this.inputRef = React.createRef();
  }

  handleFocus = () => {
    this.setState({ focused: true });
  }

  handleBlur = () => {
    this.setState({ focused: false });
  }

  handleChange = ({ target }) => {
    const inputValue = this.inputRef.current.value;

    this.setState({ value: target.value })
    if (inputValue.length > 0) {
      this.setState({ filled: true });
    } else {
      this.setState({ filled: false });
    }
  }

  render() {
    const { type = `text`, id, labelText, isRequired = false, name, autofocus = false, isAutocomplete = false } = this.props;
    const { focused, filled, value } = this.state;
    return (
      <div className={`form-control ${focused || filled ? `is-focused` : ``} `}>
        <label className="form-control__label" htmlFor={id}>{labelText}</label>
        <input
          type={type}
          className="form-control__field"
          id={id}
          ref={this.inputRef}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          value={value}
          name={name}
          required={isRequired}
          autoFocus={autofocus}
          autoComplete={isAutocomplete ? `off` : ``}
        />
      </div>
    );
  }
}

Field.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  autofocus: PropTypes.bool,
  isAutocomplete: PropTypes.bool,
}

export default Field;
