import React from "react";

import SEO from "../components/seo/seo";
import Contacts from "../components/contacts/contacts";
import { Link } from "gatsby"

const SuccessPage = () => (
  <>
    <SEO description={`Portfolio`} title="The form has been success sent"/>
    <Contacts child={
      <>
        <p className={`success-sent-text`}>Your message has been successfully send. I&rsquo;ll write you soon.</p>
        <div className="contacts__button-home">
          <Link className="button" to={`/`}>Back Home</Link>
        </div>
      </>
    }/>
  </>
);

export default SuccessPage;
