import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Contacts from "../components/contacts/contacts";

const ContactsPage = () => (
  <Layout>
    <SEO description={`Portfolio`} title="Contact"/>
    <Contacts/>
  </Layout>
);

export default ContactsPage;
