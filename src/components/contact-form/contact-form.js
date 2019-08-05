import React from "react"
import { Link } from "gatsby"
import compose from "recompose/compose"

import "./contact-form.css"

import SEO from "../seo/seo"
import Field from "../field/field"

import withContactForm from "./with-contact-form"
import withSubmittingForm from "./with-submitting-form"

const ContactForm = (props) => {
  const { name, email, message, onChange, isSending, isSent, error, onSubmit } = props
  return (
    <>
      {
        isSent ?
          <>
            <SEO description={`Portfolio`} title="The form has been success sent"/>
            <p className={`success-sent-text`}>Your message has been successfully send. I&rsquo;ll write you
              soon.</p>
            <div className="contacts__button-home">
              <Link className="button" to={`/`}>Back Home</Link>
            </div>
          </>
          :
          <form className="contact-form" onSubmit={onSubmit} id="contacts" action={`/success-sent/`}
                name="contact"
                method="POST"
                data-netlify="true">
            <input type="hidden" name="form-name" value="contact"/>
            <p hidden><label>Don’t fill this out: <input name="bot-field"/></label></p>
            <div className="contact-form__body">
              <div className="contact-form__fields">
                <Field
                  id={`contacts-name`}
                  onChange={onChange}
                  label={`Name`}
                  value={name}
                  name={`name`}
                  isRequired={true}
                />
                <Field
                  onChange={onChange}
                  id={`contacts-email`}
                  value={email}
                  name={`email`}
                  label={`E-mail`}
                  isRequired={true}
                  type={`email`}
                  pattern={`[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`}
                  inputmode="email"
                />
              </div>
              <Field
                id={`contacts-message`}
                onChange={onChange}
                value={message}
                name={`message`}
                label={`What I need to know?`}
              />
            </div>
            {error && <span aria-live="assertive" role="banner">{error}</span>}
            <button
              className={`contact-form__submit button ${isSending && `button--disabled`}`}
              disabled={isSending}
              type="submit">{isSending ? `Sending...` : `Get in touch`}</button>
          </form>
      }
    </>
  )
}
const enhance = compose(
  withContactForm,
  withSubmittingForm,
)
export default enhance(ContactForm)
