import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { TimelineLite } from "gsap"

import "./promo.css"


const Promo = () => {
  const title = useRef(null)
  const paragraph = useRef(null)
  const button = useRef(null)
  const myTween = new TimelineLite({ paused: true })
  useEffect(() => {
    myTween
      .to(title.current, 0.25, { y: 0, opacity: 1 })
      .to(paragraph.current, 0.25, { y: 0, opacity: 1 }, "-=0.1")
      .to(button.current, 0.25, { y: 0, opacity: 1 }, "-=0.1")
      .play()
    return () =>  myTween.clear()
  })

  return (
    <section className="promo">
      <h1 ref={title} className="promo__title h1 slide-down">I&rsquo;m Front-end developer from Kyiv, Ukraine</h1>
      <p className={`promo__subtitle slide-down`} ref={paragraph}>I&nbsp;don&rsquo;t like to&nbsp;define myself by&nbsp;the work
        I&rsquo;ve
        done.
        I&nbsp;define myself by&nbsp;the work&nbsp;I want to&nbsp;do.</p>
      <div ref={button} className={`slide-down`}>
        <Link className={`promo__button button`} to={`/contacts`}>hire me</Link>
      </div>
    </section>
  )
}

export default Promo
