import React, { PureComponent } from "react";
import { TimelineLite} from "gsap";

import withLocation from "./with-location";
import Pagination from "../pagination/pagination";
import "./work.css";


class Work extends PureComponent {
  constructor(props) {
    super(props);

    this._title = null;
    this._subtitle = null;
    this._buttons = null;
    this._myTween = new TimelineLite({ paused: true });
    this._skills = null;
    this._previewPhoto = null;
    this._buttonsMobile = null;
  }

  componentDidMount() {
    this._myTween
      .from(this._title, 0.45, { autoAlpha: 0, y: -10 })
      .from(this._subtitle, 0.25, { autoAlpha: 0, y: -10 }, "-=0.2")
      .from(this._skills, 0.25, { y: -30, autoAlpha: 0 })
      .from(this._buttons, 0.25, { autoAlpha: 0, y: -10 })
      .from(this._buttonsMobile, 0.25, { autoAlpha: 0, y: -30 }, "-=0.1")
      .from(this._previewPhoto, 1, { opacity: 0, x: 70, scale: 0.9 }, "-=0.1")
      .to(this._previewPhoto, 2, { opacity: 1, x: 0, scale: 1 })
      .play();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this._myTween.restart(true);
  }

  render() {
    const { data, search } = this.props;
    const { project } = search;
    const dataWork = data.allMarkdownRemark.edges
        .find((item) => item.node.frontmatter.query === project)
      || data.allMarkdownRemark.edges
        .find((item) => item.node.frontmatter.query === `1`);
    const projects = data.allMarkdownRemark.edges.map((item) => item.node.frontmatter.query);
    const { title, description, skills, demoLink, githubLink, preview } = dataWork.node.frontmatter;

    return (
      <section className="work">
        <div className="work__inner">
          <div className="work__info">
            <h1 className="work__title h1" ref={h2 => this._title = h2}>{title}</h1>
            <p className="work__subtitle" ref={p => this._subtitle = p} dangerouslySetInnerHTML={{__html: description}} />
            <ul className="work__techs" ref={ul => this._skills = ul}>
              {skills.split(` `).map((skill) => <li
                key={skill}>{skill} </li>)}
            </ul>
            <div className="work__buttons only-for-desktop" ref={buttons => this._buttons = buttons}>
              <a href={demoLink} className="work__button button">Discover</a>
              <a href={githubLink} className="work__button button">view code</a>
            </div>
          </div>
          <div className="work__screen">
            <div className="work__preview" ref={img => this._previewPhoto = img}>
              <img src={`/img/${preview}`} alt={`Screen ${title}`}/>
            </div>
            <div className="work__buttons only-for-mobile" ref={buttonsMobile => this._buttonsMobile = buttonsMobile}>
              <a href={demoLink} className="work__button button">Discover</a>
              <a href={githubLink} className="work__button button">view code</a>
            </div>
          </div>
        </div>
        <Pagination currentWork={dataWork.node.frontmatter.query} works={projects}/>
      </section>
    )
  }
}

export default withLocation(Work);

