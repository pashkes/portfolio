import React, { PureComponent } from "react";
import { TimelineLite } from "gsap";

import "./about.css";
import DownloadIcon from "./../../images/icons/download.svg";
import ModalExp from "../modal-exp/modal-exp";
import MyPhoto from "../my-photo/my-photo";

class About extends PureComponent {
  constructor(props) {
    super(props);
    this.title = null;
    this.subtitle = null;
    this.btnDownload = null;
    this.myPhoto = null;

    this.myTween = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.myTween
      .from(this.title, 0.25, { autoAlpha: 0, y: -30 })
      .from(this.subtitle, 0.25, { autoAlpha: 0, y: -30 }, "-=0.1")
      .from(this.btnDownload, 0.25, { autoAlpha: 0, y: -30 }, "-=0.1")
      .from(this.myPhoto, 0.35, { autoAlpha: 0, opacity: 0 }, "-=0.1")
      .play();
  }

  render() {
    return (
      <section className="about">
        <div className="about__body">
          <h2 className="h1" ref={h1 => this.title = h1}>Hi, I&rsquo;m Pavel Tarasenko</h2>
          <p className="about__subtitle" ref={p => this.subtitle = p}>I&rsquo;m really like creating user interfaces
            which intuitive, convenient and
            beautiful. Of&nbsp;course,
            I&rsquo;m paying attention to&nbsp;performance and accessibility that&nbsp;I consider highly important
            <ModalExp/>
            nowadays.</p>
          <div ref={button => this.btnDownload = button}>
            <a href="/" className="button-download">
              <DownloadIcon />
              <span className="button-download__text">Download CV</span>
              <span className="button-download__info">(pdf 1.2Mb)</span>
            </a>
          </div>
        </div>
        <div className="about__col">
          <div ref={photo => this.myPhoto = photo}>
            <MyPhoto />
          </div>
          <a href="/" className="button-download">
            <DownloadIcon />
            <span className="button-download__text">Download CV</span>
            <span className="button-download__info">(pdf 1.2Mb)</span>
          </a>
        </div>
      </section>
    );
  }
}

export default About;
