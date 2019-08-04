import React from "react";

import "./contacts.css";

const Contacts = ({child}) => (
  <section className="contacts">
    <h1 className="h1 contacts__title">Want to work with me?</h1>
    {child}
  </section>
)

export default Contacts
