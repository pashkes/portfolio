import React, { PureComponent, useEffect, useRef } from "react"
import { TimelineLite } from "gsap"

import "./skills.css"

const skills = [
  `TypeScript`,
  `React`,
  `Redux`,
  `CSS`,
  `JS`,
  `HTML`,
  `Enzyme`,
  `Jest`,
  `pug`,
]

const courses = [
  {
    name: `Javascript, Level&nbsp;3 (React.js)`,
    cert: `https://assets.htmlacademy.ru/certificates/intensive/133/164879.pdf`,
  },
  {
    name: `Javascript, Level&nbsp;2`,
    cert: `https://assets.htmlacademy.ru/certificates/intensive/131/164879.pdf`,
  },
  {
    name: `Javascript, Level&nbsp;1`,
    cert: `https://assets.htmlacademy.ru/certificates/intensive/55/164879.pdf`,
  },
  {
    name: `HTML and CSS, Level&nbsp;2`,
    cert: `https://assets.htmlacademy.ru/certificates/intensive/24/164879.pdf`,
  },
  {
    name: `HTML and CSS, Level&nbsp;1`,
    cert: `https://assets.htmlacademy.ru/certificates/intensive/18/164879.pdf`,
  },
]

const Skills = () => {
  const _courses = useRef([])
  const _skills = useRef([])
  const text = useRef(null)
  const myTween = new TimelineLite({ paused: true })

  useEffect(() => {
    myTween
      .to(text.current, 0.6, { opacity: 1, y: 0 })
      .staggerTo(_courses.current, 0.25, { x: 0, opacity: 1 }, 0.1, `-=.3`)
      .staggerTo(_skills.current, 0.25, { x: 0, opacity: 1 }, 0.1, `-=.4`)
      .play()
    return () => myTween.clear();
  })

  return (
    <section className="skills">
      <h1 className="invisible">Skills</h1>
      <div className="skills__col">
        <p className="skills__subtitle slide-down" ref={text}>Skills can be&nbsp;taught, personality is&nbsp;inherent.
          I&nbsp;prefer
          to&nbsp;keep
          learning, continue challenging myself, and do&nbsp;interesting things that matter.</p>
        <ul className="skills__courses">
          {
            courses.map(({ name, cert }, index) => (
              <li key={name} className={`slide-right`} ref={course => _courses.current[index] = course}>
                <p className="skills__name" dangerouslySetInnerHTML={{ __html: name }}/>
                <p className="skills__info">HTML Academy&nbsp;/ <a href={cert} className="skills__cert-link"
                                                                   target={`blank`}
                                                                   rel="noopener noreferrer">certificate</a></p>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="skills__col">
        <ul className="skills__list">
          {
            skills.map((item, index) => <li className={`slide-right`} ref={skill => _skills.current[index] = skill} key={item}>{item}</li>)
          }
        </ul>
      </div>
    </section>
  )

}
/*
class Skills extends PureComponent {
  constructor(props) {
    super(props)

    this._courses = [];
    this._skills = [];
    this._text = null;
    this._myTween = new TimelineLite({ paused: true });

  }

  componentDidMount() {
    this._myTween
      .from(this._text, 0.6, {autoAlpha: 0, x: -60})
      .staggerFrom(this._courses, 0.25, { x: -10, opacity: 0}, 0.1, `-=.3`)
      .staggerFrom(this._skills, 0.25, { x: -10, opacity: 0}, 0.1)
      .play();
  }

  render() {
    return (
      <section className="skills">
        <h1 className="invisible">Skills</h1>
        <div className="skills__col">
          <p className="skills__subtitle" ref={p=> this._text = p}>Skills can be&nbsp;taught, personality is&nbsp;inherent. I&nbsp;prefer
            to&nbsp;keep
            learning, continue challenging myself, and do&nbsp;interesting things that matter.</p>
          <ul className="skills__courses">
            {
              courses.map(({ name, cert }, index) => (
                <li key={name} ref={course => this._courses[index] = course}>
                  <p className="skills__name" dangerouslySetInnerHTML={{__html: name}} />
                  <p className="skills__info">HTML Academy&nbsp;/ <a href={cert} className="skills__cert-link" target={`blank`} rel="noopener noreferrer">certificate</a></p>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="skills__col">
          <ul className="skills__list">
            {
              skills.map((item, index) => <li ref={skill => this._skills[index] = skill} key={item}>{item}</li>)
            }
          </ul>
        </div>
      </section>
    );
  }
}
*/

export default Skills
