import React, { PureComponent } from "react"


const ERROR = `Something went wrong, check filled data`;

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const withSubmittingForm = (Component) => {
  class WithSubmittingForm extends PureComponent {
    constructor(props) {
      super(props)
      this.state = { isSending: false, isSent: false, error: null }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({ isSending: true })
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.props }),
      })
        .then(() => {
          this.setState({ isSending: false, isSent: true })
        })
        .catch(error => {
          this.setState({
            isSending: false,
            error: ERROR,
          })
          throw error
        })

    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onSubmit={this.handleSubmit}
        />
      )
    }
  }

  return WithSubmittingForm
}

export default withSubmittingForm
