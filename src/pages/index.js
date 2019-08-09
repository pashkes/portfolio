import React from "react";

import SEO from "../components/seo/seo";
import Promo from "../components/promo/promo";

const IndexPage = () => (
  <>
    <SEO description={`Portfolio`} title='Home' />
    <Promo />
  </>
);

export default IndexPage;
