import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import About from "../components/about/about";

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>
    <About/>
  </Layout>
);

export default AboutPage;
