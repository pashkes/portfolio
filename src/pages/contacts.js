import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Contacts from "../components/contacts/contacts";
import ContactForm from "../components/contact-form/contact-form"

const ContactsPage = () => (
  <Layout>
    <SEO description={`Portfolio`} title="Contact"/>
    <Contacts child={<ContactForm />}/>
  </Layout>
);

export default ContactsPage;
