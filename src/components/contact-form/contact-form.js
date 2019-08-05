import React, { useEffect, useRef } from "react"
import compose from "recompose/compose"

import "./contact-form.css"

import Field from "../field/field"

import withContactForm from "./with-contact-form"
import withSubmittingForm from "./with-submitting-form"
import { TimelineLite } from "gsap"

const ContactForm = (props) => {
  const { name, email, message, onChange, isSending, error, onSubmit } = props
  let nameRef = useRef(null)
  let emailRef = useRef(null)
  let messageRef = useRef(null)
  let buttonRef = useRef(null)
  const myTween = new TimelineLite({ paused: true })

  useEffect(() => {
    myTween
      .to(nameRef.current, .25, {opacity: 1, scaleX: 1, transformOrigin: '0 0' }, "+=0.25")
      .to(emailRef.current, .25, {opacity: 1, scaleX: 1, transformOrigin: '0 0' }, "-=0.065")
      .to(messageRef.current, .25, {opacity: 1, scaleX: 1, transformOrigin: '0 0' }, "-=0.1")
      .to(buttonRef.current, .25, { opacity: 1, y: 0 })
      .play()
  })

  return (
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
            ref={nameRef}
            className={`scale-to-right`}
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
            inputMode="email"
            ref={emailRef}
            className={`scale-to-right`}
          />
        </div>
        <Field
          id={`contacts-message`}
          onChange={onChange}
          value={message}
          name={`message`}
          label={`What I need to know?`}
          ref={messageRef}
          className={`scale-to-right`}
        />
      </div>
      {error && <span aria-live="assertive" role="banner">{error}</span>}
      <button
        ref={buttonRef}
        className={`contact-form__submit button slide-down ${isSending && `button--disabled`}`}
        disabled={isSending}
        type="submit">{isSending ? `Sending...` : `Get in touch`}</button>
    </form>
  )
}
const enhance = compose(
  withContactForm,
  withSubmittingForm,
)
export default enhance(ContactForm)
