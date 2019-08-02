import React from "react";

import SEO from "../components/seo/seo";
import Work from "../components/work/work";
import { StaticQuery, graphql } from "gatsby";

const WorkPage = () => (
  <>
    <SEO title="Work"/>
    <StaticQuery query={pageQuery} render={data => <Work data={data} />}>
    </StaticQuery>
  </>
);
const pageQuery = graphql`{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          description
          query
          skills
          preview
          githubLink
          demoLink
        }
      }
    }
  }
}`;
export default WorkPage;
