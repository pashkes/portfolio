import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const MyPhoto = () => {
  const data = useStaticQuery(schemaForMyPhoto)
  return (<Img
    className="about__photo"
    fluid={data.file.childImageSharp.fluid}
    alt="Pavel Tarasenko"
  />)
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
export default MyPhoto;
