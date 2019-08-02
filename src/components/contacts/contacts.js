import React from "react";

import "./contacts.css";
import Social from "../social/social";

const Contacts = ({child}) => (
  <section className="contacts">
    <h2 className="h1 contacts__title">Want to work with me?</h2>
    {child}
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
