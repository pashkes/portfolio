import React, { PureComponent } from "react";
import { Link } from "gatsby";
import { TimelineLite} from "gsap";

import "./promo.css";

class Promo extends PureComponent {
  constructor(props) {
    super(props)

    this._title = null;
    this._paragraph = null;
    this._button = null;
    this._myTween = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this._myTween
      .from(this._title, 0.25, { autoAlpha: 0, y: -30, opacity: 0})
      .from(this._paragraph, 0.25, {autoAlpha: 0, y: -30, opacity: 0}, "-=0.1")
      .from(this._button, 0.25, {autoAlpha: 0, y: -30, opacity: 0}, "-=0.1")
      .play();
  }

  render() {
    return (
      <section className="promo" ref={ div => this.content = div }>
        <h1 ref={ h1 => this._title = h1 } className="promo__title h1">I&rsquo;m Front-end developer from Kyiv, Ukraine</h1>
        <p className={`promo__subtitle`} ref={p => this._paragraph = p}>I&nbsp;don&rsquo;t like to&nbsp;define myself by&nbsp;the work I&rsquo;ve
          done.
          I&nbsp;define myself by&nbsp;the work&nbsp;I want to&nbsp;do.</p>
        <div ref={button => this._button = button}>
          <Link  className={`promo__button button`} to={`/contacts`}>hire me</Link>
        </div>
      </section>
    );
  }
}

export default Promo;
