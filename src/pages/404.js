import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found"/>
    <section>
      <h2>Page not found</h2>
      <Link className={`button`} to={`/`}>back to home</Link>
    </section>
  </>
)

export default NotFoundPage
