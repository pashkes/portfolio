import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import withLocation from "./../with-location"

import Pagination from "../pagination/pagination"
import "./work.css"

const Work = ({ data, search }) => {
  const { project } = search
  const dataWork = data.allMarkdownRemark.edges
      .find((item) => item.node.frontmatter.query === project)
    || data.allMarkdownRemark.edges
      .find((item) => item.node.frontmatter.query === `1`);
  const projects = data.allMarkdownRemark.edges.map((item) => item.node.frontmatter.query)
  const { title, description, skills, demoLink, githubLink, preview } = dataWork.node.frontmatter;
  return (
    <section className="work">
      <div className="work__inner">
        <div className="work__info">
          <h2 className="work__title h1">{title}</h2>
          <p className="work__subtitle">{description}</p>
          <ul className="work__techs">
            {skills.split(` `).map((skill) => <li key={skill}>{skill} </li>)}
          </ul>
          <div className="work__buttons only-for-desktop">
            <a href={demoLink} className="work__button button">Discover</a>
            <a href={githubLink} className="work__button button">view code</a>
          </div>
        </div>
        <div className="work__screen">
          <div className="work__preview">
            <img src={`/img/${preview}`} alt={`Screen ${title}`}/>
            {/*<Img />*/}
          </div>
          <div className="work__buttons only-for-mobile">
            <a href={demoLink} className="work__button button">Discover</a>
            <a href={githubLink} className="work__button button">view code</a>
          </div>
        </div>
      </div>
      <Pagination currentWork={dataWork.node.frontmatter.query} works={projects}/>
    </section>
  )
}

export const query = graphql/*`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        preview {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
*/
export default withLocation(Work)

