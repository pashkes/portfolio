import React from "react";

import "./contacts.css";

const Contacts = ({child}) => (
  <section className="contacts">
    <h2 className="h1 contacts__title">Want to work with me?</h2>
    {child}
  </section>
)

export default Contacts
