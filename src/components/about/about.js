import React, {useEffect, useRef} from "react";
import {TimelineLite} from "gsap";

import "./about.css";
import DownloadIcon from "./../../images/icons/download.svg";
import ModalExp from "../modal-exp/modal-exp";
import MyPhoto from "../my-photo/my-photo";

const About = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnDownloadRef = useRef(null);
  const myPhotoRef = useRef(null);
  const tl = new TimelineLite({paused: true});
  useEffect(() => {
    tl.to(titleRef.current, 0.45, {opacity: 1, y: 0})
      .to(subtitleRef.current, 0.25, {opacity: 1, y: 0}, "-=0.1")
      .to(btnDownloadRef.current, 0.25, {opacity: 1, y: 0}, "-=0.1")
      .to(myPhotoRef.current, 0.35, {opacity: 1}, "-=0.1")
      .play();
  }, []);

  return (
    <section className="about">
      <div className="about__body">
        <h2 className="h1 slide-down" ref={titleRef}>
          Hi, I&rsquo;m Pavel Tarasenko
        </h2>
        <p className="about__subtitle slide-down" ref={subtitleRef}>
          I&rsquo;m Pavel from Kyiv, Ukraine. I&nbsp;have more than 2&nbsp;years&rsquo; <ModalExp /> in&nbsp;HTML/CSS/Javascript. I&nbsp;love creating user interfaces which are intuitive, convenient and beautiful. Of&nbsp;course, I&rsquo;m paying attention to&nbsp;performance and accessibility that&nbsp;I consider to&nbsp;be&nbsp;highly important.
        </p>
        <div className={`slide-down`} ref={btnDownloadRef}>
          <a href="/pavlo-tarasenko-cv.pdf" download className="button-download">
            <DownloadIcon aria-hidden={true} />
            <span className="button-download__text">Download CV</span>
            <span className="button-download__info">(pdf 66kb)</span>
          </a>
        </div>
      </div>
      <div className="about__col">
        <div className={`fade`} ref={myPhotoRef}>
          {/*<MyPhoto />*/}
        </div>
        <a href="/static/pavlo-tarasenko-cv.pdf" className="button-download">
          <DownloadIcon aria-hidden={true} />
          <span className="button-download__text">Download CV</span>
          <span className="button-download__info">(pdf 66kb)</span>
        </a>
      </div>
    </section>
  );
};

export default About;
