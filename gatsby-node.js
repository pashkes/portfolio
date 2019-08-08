/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const createPaginatedPages = require("gatsby-paginate")

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        works: allMarkdownRemark(sort: {fields: [frontmatter___title], order: DESC}) {
          edges {
            node {
              id
              frontmatter {
                title
                skills
                query
                preview
                githubLink
                description
                demoLink
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      createPaginatedPages({
        edges: result.data.works.edges,
        createPage: createPage,
        pageTemplate: "src/layouts/work.js",
        pageLength: 1,
        pathPrefix: "work",
        buildPath: (index, pathPrefix) =>
          index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
      })
      resolve()
    })
  })
}
