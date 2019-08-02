import React from "react";

import "./contacts.css";
import Social from "../social/social";
import Field from "../field/field";

const Contacts = () => (
  <section className="contacts">
    <h2 className="h1 contacts__title">Want to work with me?</h2>
    <form className="contacts__form" id="contacts"  name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>
      <div className="contacts__body-form">
        <div className="contacts__fields">
          <Field id={`contacts-name`} labelText={`Name`} name={`name`} isRequired={true} autofocus={true} />
          <Field type={`e-mail`} id={`contacts-email`} name={`email`} labelText={`E-mail`} isRequired={true} />
        </div>
        <Field id={`contacts-message`} name={`message`} labelText={`What I need to know?`} />
      </div>
      <button className="contacts__submit button" type="submit">Get in touch</button>
    </form>
    <div className="contacts__footer">
      <ul className="contacts__list">
        <li>
          <span className="contacts__type">E-mail</span>
          <a href="mailto:pashkes@gmail.com" className="contacts__link">pashkes@gmail.com</a>
        </li>
        <li>
          <span className="contacts__type">Phone</span>
          <a href="tel:+380981728325" className="contacts__link">+38(098)172-83-25</a>
        </li>
      </ul>
      <div className="contacts__social">
        <Social />
      </div>
    </div>
  </section>
)

export default Contacts
