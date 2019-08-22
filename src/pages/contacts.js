import React from "react";

import SEO from "../components/seo/seo";
import Contacts from "../components/contacts/contacts";
import ContactForm from "../components/contact-form/contact-form";

const ContactsPage = () => (
  <>
    <SEO title="Contact" />
    <Contacts child={<ContactForm />} />
  </>
);

export default ContactsPage;
