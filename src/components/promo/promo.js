import React from "react"
import { Link } from "gatsby"
import "./promo.css"

const Promo = () => (
  <section className="promo">
    <h1 className="promo__title h1">I&rsquo;m Front-end developer from Kyiv, Ukraine</h1>
    <p className={`promo__subtitle`}>I&nbsp;don&rsquo;t like to&nbsp;define myself by&nbsp;the work I&rsquo;ve
      done.
      I&nbsp;define myself by&nbsp;the work&nbsp;I want to&nbsp;do.</p>
    <Link className={`promo__button button`} to={`/contacts`}>hire me</Link>
  </section>
)

export default Promo
