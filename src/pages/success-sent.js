import React from "react";

import SEO from "../components/seo/seo";
import Contacts from "../components/contacts/contacts";

const SuccessPage = () => (
  <>
    <SEO description={`Portfolio`} title="The form has been success sent"/>
    <Contacts child={<p className={`success-sent-text`}>Your message has been successfully send. I&rsquo;ll write you soon.</p>}/>
  </>
);

export default SuccessPage;
