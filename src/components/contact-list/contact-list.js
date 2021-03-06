import React from "react";

import "./contact-list.css";

const ContactList = () => (
  <ul className="contacts-list">
    <li>
      <span className="contacts-list__type">E-mail</span>
      <a href="mailto:pavlo.tarasenko.dev@gmail.com" className="contacts-list__link link">
        pavlo.tarasenko.dev@gmail.com
      </a>
    </li>
    <li>
      <span className="contacts-list__type">Phone</span>
      <a href="tel:+380981728325" className="contacts-list__link link">
        +38(098)172-83-25
      </a>
    </li>
  </ul>
);

export default ContactList;
