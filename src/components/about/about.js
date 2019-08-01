import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import "./about.css"
import downloadIcon from "./../../images/download.svg"

const About = () => {
  const data = useStaticQuery(schemaForMyPhoto)
  console.log(data.file.childImageSharp.fluid)
  return (
    <section className="about">
      <div className="about__body">
        <h2 className="h1">Hi, I&rsquo;m Pavel Tarasenko</h2>
        <p className="about__subtitle">I&rsquo;m really like creating user interfaces which intuitive, convenient and
          beautiful. Of&nbsp;course,
          I&rsquo;m paying attention to&nbsp;performance and accessibility that&nbsp;I consider highly important
          experience
          nowadays.</p>
        <a href="/" className="button-download">
          <svg width={15} height={16}>
            <use xlinkHref={`#${downloadIcon.id}`}/>
          </svg>
          <span className="button-download__text">Download CV</span>
          <span className="button-download__info">(pdf 1.2Mb)</span>
        </a>
      </div>
      <div className="about__col">
        <Img
          className="about__photo"
          fluid={data.file.childImageSharp.fluid}
          alt="Pavel Tarasenko"
        />
        <a href="/" className="button-download">
          <svg width={15} height={16}>
            <use xlinkHref={`#${downloadIcon.id}`}/>
          </svg>
          <span className="button-download__text">Download CV</span>
          <span className="button-download__info">(pdf 1.2Mb)</span>
        </a>
      </div>
    </section>
  )
}

const schemaForMyPhoto = graphql`
    query {
      file(relativePath: { regex: "/my-photo/" }) {
        childImageSharp {
          fluid(quality: 100)  {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `

export default About
