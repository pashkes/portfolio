import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Promo from "../components/promo/promo"

const IndexPage = () => (
  <Layout>
    <SEO description={`Portfolio`} title="Home"/>
    <Promo/>
  </Layout>
);

export default IndexPage;
