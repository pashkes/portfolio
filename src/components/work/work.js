import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  const projectsQuery = data.allMarkdownRemark.edges.map((item) => item.node.frontmatter.query);
  const { title, description, skills, demoLink, githubLink, preview } = dataWork.node.frontmatter;

  const imagePreview = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/cities/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  console.log(data)
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
          </div>
          <div className="work__buttons only-for-mobile">
            <a href={demoLink} className="work__button button">Discover</a>
            <a href={githubLink} className="work__button button">view code</a>
          </div>
        </div>
      </div>
      <Pagination currentWork={dataWork.node.frontmatter.query} works={projectsQuery}/>
    </section>
  )
}

export default withLocation(Work)

