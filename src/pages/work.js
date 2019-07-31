import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Work from "../components/work/work"
import { StaticQuery, graphql } from "gatsby"

const WorkPage = () => (
  <Layout>
    <SEO title="Work"/>
    <StaticQuery query={pageQuery} render={data => <Work data={data} />}>
    </StaticQuery>
  </Layout>
)
const pageQuery = graphql`{
  allMarkdownRemark {
    totalCount
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
}`
export default WorkPage
