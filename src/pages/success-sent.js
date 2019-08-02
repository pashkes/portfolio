import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Contacts from "../components/contacts/contacts";
import ContactList from "../components/contact-list/contact-list";

const SuccessPage = () => (
  <Layout classModFooter={`layout__footer--page-contact`} footer={<ContactList />}>
    <SEO description={`Portfolio`} title="The form has been success sent"/>
    <Contacts child={<p className={`success-sent-text`}>Your message has been successfully send. I&rsquo;ll write you soon.</p>}/>
  </Layout>
);

export default SuccessPage;
