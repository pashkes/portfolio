import React, { PureComponent } from "react"

const withContactForm = (Component) => {
  class WithContactForm extends PureComponent {
    constructor(props) {
      super(props)
      this.state = { name: ``, email: ``, message: `` }
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value })
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onChange={this.handleChange}
        />
      )

    }
  }

  return WithContactForm
}

export default withContactForm
