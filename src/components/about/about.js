import React from "react";

import "./about.css";
import downloadIcon from "./../../images/download.svg";

const About = () => (
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
      <img className="about__photo" src="/img/my-photo.png" alt="Pavel Tarasenko"/>
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

export default About
