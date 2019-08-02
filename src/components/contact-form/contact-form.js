import React from "react";
import Field from "../field/field";

import "./contact-form.css";

const ContactForm = () => (
  <form className="contact-form" id="contacts" action={`/success-sent/`} name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact"/>
    <p hidden><label>Don’t fill this out: <input name="bot-field"/></label></p>
    <div className="contact-form__body">
      <div className="contact-form__fields">
        <Field id={`contacts-name`} labelText={`Name`} name={`name`} isRequired={true} autofocus={true}/>
        <Field type={`e-mail`} id={`contacts-email`} name={`email`} labelText={`E-mail`} isRequired={true}/>
      </div>
      <Field id={`contacts-message`} name={`message`} labelText={`What I need to know?`}/>
    </div>
    <button className="contact-form__submit button" type="submit">Get in touch</button>
  </form>
);

export default ContactForm;
