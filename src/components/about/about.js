import React, { useEffect, useRef } from "react"
import { TimelineLite } from "gsap"

import "./about.css"
import DownloadIcon from "./../../images/icons/download.svg"
import ModalExp from "../modal-exp/modal-exp"
import MyPhoto from "../my-photo/my-photo"

const About = () => {
  const title = useRef(null)
  const subtitle = useRef(null)
  const btnDownload = useRef(null)
  const myPhoto = useRef(null)
  const myTween = new TimelineLite({ paused: true })
  useEffect(() => {
    myTween
      .to(title.current, 0.45, { opacity: 1, y: 0 })
      .to(subtitle.current, 0.25, { opacity: 1, y: 0 }, "-=0.1")
      .to(btnDownload.current, 0.25, { opacity: 1, y: 0 }, "-=0.1")
      .to(myPhoto.current, 0.35, { opacity: 1}, "-=0.1")
      .play()
  })

  return (
    <section className="about">
      <div className="about__body">
        <h1 className="h1 slide-down" ref={title}>Hi, I&rsquo;m Pavel Tarasenko</h1>
        <p className="about__subtitle slide-down" ref={subtitle} >I&rsquo;m really like creating user interfaces
          which intuitive, convenient and
          beautiful. Of&nbsp;course,
          I&rsquo;m paying attention to&nbsp;performance and accessibility that&nbsp;I consider highly important
          <ModalExp/>
          nowadays.</p>
        <div className={`slide-down`} ref={btnDownload} >
          <a href="/" className="button-download">
            <DownloadIcon/>
            <span className="button-download__text">Download CV</span>
            <span className="button-download__info">(pdf 1.2Mb)</span>
          </a>
        </div>
      </div>
      <div className="about__col">
        <div className={`slide-down`} ref={myPhoto}>
          <MyPhoto/>
        </div>
        <a href="/" className="button-download">
          <DownloadIcon aria-hidden={true}/>
          <span className="button-download__text">Download CV</span>
          <span className="button-download__info">(pdf 1.2Mb)</span>
        </a>
      </div>
    </section>
  )
}

export default About
