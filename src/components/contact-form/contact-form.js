import React, { PureComponent } from "react"
import Field from "../field/field"
import { Link } from "gatsby"

import "./contact-form.css"
import SEO from "../seo/seo"

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { name: ``, email: ``, message: ``, isSending: false, isSent: false, fieldIsFill: false, error: `` }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = (e) => {
    this.setState({ isSending: true })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => {
        this.setState({ name: ``, email: ``, message: ``, isSending: false, isSent: true })
      })
      .catch(error => {
        this.setState({
          name: ``,
          email: ``,
          message: ``,
          isSending: false,
          isSent: true,
          error: `Something went wrong, check filled data`,
        })
        throw error
      })

    e.preventDefault()
  }

  render() {
    const { name, email, message, isSending, isSent, error } = this.state
    return (
      <>
        {isSent ?
          <>
            <SEO description={`Portfolio`} title="The form has been success sent"/>
            <p className={`success-sent-text`}>Your message has been successfully send. I&rsquo;ll write you
              soon.</p>
            <div className="contacts__button-home">
              <Link className="button" to={`/`}>Back Home</Link>
            </div>
          </>
          :
          <form className="contact-form" onSubmit={this.handleSubmit} id="contacts" action={`/success-sent/`}
                name="contact"
                method="POST"
                data-netlify="true">
            <input type="hidden" name="form-name" value="contact"/>
            <p hidden><label>Don’t fill this out: <input name="bot-field"/></label></p>
            <div className="contact-form__body">
              <div className="contact-form__fields">
                <Field
                  id={`contacts-name`}
                  onChange={this.handleChange}
                  labelText={`Name`}
                  value={name}
                  name={`name`}
                  isRequired={true}
                />
                <Field
                  type={`email`}
                  onChange={this.handleChange}
                  id={`contacts-email`}
                  value={email}
                  name={`email`}
                  labelText={`E-mail`}
                  isRequired={true}
                  pattern={`[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`}
                />
              </div>
              <Field
                id={`contacts-message`}
                onChange={this.handleChange}
                value={message}
                name={`message`}
                labelText={`What I need to know?`}
              />
            </div>
            {error && <span aria-live="assertive" role="banner">{error}</span>}
            <button
              className={`contact-form__submit button ${isSending ? `button--disabled` : ``}`}
              disabled={isSending}
              type="submit">{isSending ? `Sending...` : `Get in touch`}</button>
          </form>}
      </>
    )
  }
}

export default ContactForm
