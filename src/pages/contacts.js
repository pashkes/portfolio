import React from "react";

import SEO from "../components/seo/seo";
import Contacts from "../components/contacts/contacts";
import ContactForm from "../components/contact-form/contact-form"

const ContactsPage = (props) => (
  <>
    {console.log(props)}
    <SEO description={`Portfolio`} title="Contact"/>
    <Contacts child={<ContactForm />}/>
  </>
);

export default ContactsPage;
