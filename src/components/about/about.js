import React, { PureComponent } from "react";
import { TimelineLite } from "gsap";

import "./about.css";
import DownloadIcon from "./../../images/icons/download.svg";
import ModalExp from "../modal-exp/modal-exp";
import MyPhoto from "../my-photo/my-photo";

class About extends PureComponent {
  constructor(props) {
    super(props);
    this._title = null;
    this._subtitle = null;
    this._btnDownload = null;
    this._myPhoto = null;
    this._myTween = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this._myTween
      .from(this._title, 0.25, { autoAlpha: 0, y: -30 })
      .from(this._subtitle, 0.25, { autoAlpha: 0, y: -30 }, "-=0.1")
      .from(this._btnDownload, 0.25, { autoAlpha: 0, y: -30 }, "-=0.1")
      .from(this._myPhoto, 0.35, { autoAlpha: 0, opacity: 0 }, "-=0.1")
      .play();
  }

  render() {
    return (
      <section className="about">
        <div className="about__body">
          <h1 className="h1" ref={h1 => this._title = h1}>Hi, I&rsquo;m Pavel Tarasenko</h1>
          <p className="about__subtitle" ref={p => this._subtitle = p}>I&rsquo;m really like creating user interfaces
            which intuitive, convenient and
            beautiful. Of&nbsp;course,
            I&rsquo;m paying attention to&nbsp;performance and accessibility that&nbsp;I consider highly important
            <ModalExp/>
            nowadays.</p>
          <div ref={button => this._btnDownload = button}>
            <a href="/" className="button-download">
              <DownloadIcon />
              <span className="button-download__text">Download CV</span>
              <span className="button-download__info">(pdf 1.2Mb)</span>
            </a>
          </div>
        </div>
        <div className="about__col">
          <div ref={photo => this._myPhoto = photo}>
            <MyPhoto />
          </div>
          <a href="/" className="button-download">
            <DownloadIcon aria-hidden={true} />
            <span className="button-download__text">Download CV</span>
            <span className="button-download__info">(pdf 1.2Mb)</span>
          </a>
        </div>
      </section>
    );
  }
}

export default About;
