import React, { useEffect, useRef, useState } from "react"
import { withFormik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { navigate } from "gatsby"

import "./contact-form.css"


import { TimelineLite } from "gsap"

const ERROR = `Something went wrong, check filled data`

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const ContactForm = ({ values, errors, isSubmitting, touched }) => {
  let nameRef = useRef(null)
  let emailRef = useRef(null)
  let messageRef = useRef(null)
  let buttonRef = useRef(null)
  const myTween = new TimelineLite({ paused: true })
  const [isFilledName, setFillName] = useState(false)
  const [isFilledEmail, setFillEmail] = useState(false)
  const [isFilledMessage, setFillMessage] = useState(false)

  useEffect(() => {
    values.name.length ? setFillName(true) : setFillName(false)
    values.email.length ? setFillEmail(true) : setFillEmail(false)
    values.message.length ? setFillMessage(true) : setFillMessage(false)
  }, [values.name, values.email, values.message])

  useEffect(() => {
    const inputName = nameRef.current.querySelector(`input`);
    myTween
      .to(nameRef.current, .25, { opacity: 1, scaleX: 1, transformOrigin: "0 0" }, "+=0.25")
      .to(emailRef.current, .25, { opacity: 1, scaleX: 1, transformOrigin: "0 0" }, "-=0.065")
      .to(messageRef.current, .25, { opacity: 1, scaleX: 1, transformOrigin: "0 0" }, "-=0.1")
      .to(buttonRef.current, .25, { opacity: 1, y: 0 })
      .play()
      .eventCallback(`onComplete`, () => inputName.focus())
  }, [])

  return (
    <Form className="contact-form"
          action={`/success-sent/`}
          name="contact"
          method="POST"
          data-netlify="true">
      <input type="hidden" name="form-name" value="contact"/>
      <p hidden><label>Don’t fill this out: <input name="bot-field"/></label></p>

      <div className="contact-form__body">
        <div className="contact-form__fields">
          <div
            className={`form-control scale-to-right ${isFilledName ? `filled` : ``} ${errors.name && touched.name ? `error` : ``}`}
            ref={nameRef}>
            <Field className={`form-control__field`} name="name" id="contacts-name"/>
            <label className="form-control__label" htmlFor="contacts-name">Name</label>
            <ErrorMessage className="form-control__error" component="span" name="name"/>
          </div>
          <div
            className={`form-control scale-to-right ${isFilledEmail ? `filled` : ``} ${errors.email && touched.email ? `error` : ``}`}
            ref={emailRef}>
            <Field type="email" className={`form-control__field`} name="email" id="contacts-email"
                   pattern={`[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`} inputMode="email"/>
            <label className="form-control__label" htmlFor="contacts-email">E-mail</label>
            <ErrorMessage className="form-control__error" component="span" name="email"/>
          </div>
        </div>
        <div
          className={`form-control scale-to-right ${isFilledMessage ? `filled` : ``} ${errors.message && touched.message ? `error` : ``}`}
          ref={messageRef}>
          <Field className={`form-control__field`} name="message" id="contacts-message"/>
          <label className="form-control__label" htmlFor="contacts-message">What I need to know?</label>
        </div>
      </div>
      <button
        ref={buttonRef}
        className={`contact-form__submit button slide-down ${isSubmitting && `button--disabled`}`}
        disabled={isSubmitting}
        type="submit">{isSubmitting ? `Sending...` : `Get in touch`}</button>
    </Form>
  )
}
const ValidationContactForm = withFormik({
  mapPropsToValues({ email, name, message }) {
    return {
      email: email || ``,
      name: name || ``,
      message: message || ``,
    }
  },
  handleSubmit(values, { setError, setSubmitting, setFieldTouched }) {
    setSubmitting(true)
    setFieldTouched()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => {
        setSubmitting(false)
        navigate("/success-sent/")
      })
      .catch(() => {
        setSubmitting(false)
        setError(ERROR)
      })
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, `Name must be at least 3 characters`)
      .required(`Name is a required field`),
    email: Yup.string()
      .email(`Please enter a valid email address`)
      .required(`Email is a required field`),
  }),
})(ContactForm)

export default ValidationContactForm
