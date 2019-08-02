import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Contacts from "../components/contacts/contacts";

const SuccessPage = () => (
  <Layout>
    <SEO description={`Portfolio`} title="Contact"/>
    <Contacts child={<p className={`success-sent-text`}>Your message has been successfully send. I&rsquo;ll write you soon.</p>}/>
  </Layout>
);

export default SuccessPage;
