import React, { PureComponent } from "react";
import { TimelineLite} from "gsap";

import withLocation from "./with-location";
import Pagination from "../pagination/pagination";
import "./work.css";

class Work extends PureComponent {
  constructor(props) {
    super(props)

    this.title = null
    this.subtitle = null
    this.buttons = null
    this.myTween = new TimelineLite({ paused: true })
    this.skills = null
    this.previewPhoto = null
  }

  componentDidMount() {
    this.myTween
      .from(this.title, 0.25, { autoAlpha: 0, y: -30 })
      .from(this.subtitle, 0.25, { autoAlpha: 0, y: -30 }, "-=0.1")
      .from(this.skills, 0.25, { y: -30, autoAlpha: 0 }, "-=0.1")
      .from(this.buttons, 0.25, { autoAlpha: 0, y: -30 }, "-=0.1")
      .from(this.previewPhoto, 0.3, { opacity: 0 })
      .play()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.myTween.restart(true)
  }

  render() {
    const { data, search } = this.props
    const { project } = search
    const dataWork = data.allMarkdownRemark.edges
        .find((item) => item.node.frontmatter.query === project)
      || data.allMarkdownRemark.edges
        .find((item) => item.node.frontmatter.query === `1`)
    const projects = data.allMarkdownRemark.edges.map((item) => item.node.frontmatter.query)
    const { title, description, skills, demoLink, githubLink, preview } = dataWork.node.frontmatter

    return (
      <section className="work">
        <div className="work__inner">
          <div className="work__info">
            <h2 className="work__title h1" ref={h2 => this.title = h2}>{title}</h2>
            <p className="work__subtitle" ref={p => this.subtitle = p} dangerouslySetInnerHTML={{__html: description}} />
            <ul className="work__techs" ref={ul => this.skills = ul}>
              {skills.split(` `).map((skill) => <li
                key={skill}>{skill} </li>)}
            </ul>
            <div className="work__buttons only-for-desktop" ref={buttons => this.buttons = buttons}>
              <a href={demoLink} className="work__button button">Discover</a>
              <a href={githubLink} className="work__button button">view code</a>
            </div>
          </div>
          <div className="work__screen">
            <div className="work__preview" ref={img => this.previewPhoto = img}>
              <img src={`/img/${preview}`} alt={`Screen ${title}`}/>
            </div>
            <div className="work__buttons only-for-mobile">
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

