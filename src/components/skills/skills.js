import React, { PureComponent } from "react";
import { TimelineLite } from "gsap";

import "./skills.css";

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
];

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
];

class Skills extends PureComponent {
  constructor(props) {
    super(props)

    this.courses = [];
    this.skills = [];
    this.text = null;
    this.myTween = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.myTween
      .from(this.text, 0.6, {autoAlpha: 0, x: -60})
      .staggerFrom(this.courses, 0.25, { x: -10, opacity: 0}, 0.1, `-=.3`)
      .staggerFrom(this.skills, 0.25, { x: -10, opacity: 0}, 0.1)
      .play();
  }

  render() {
    return (
      <section className="skills">
        <h2 className="invisible">Skills</h2>
        <div className="skills__col">
          <p className="skills__subtitle" ref={p=> this.text = p}>Skills can be&nbsp;taught, personality is&nbsp;inherent. I&nbsp;prefer
            to&nbsp;keep
            learning, continue challenging myself, and do&nbsp;interesting things that matter.</p>
          <ul className="skills__courses">
            {
              courses.map(({ name, cert }, index) => (
                <li key={name} ref={course => this.courses[index] = course}>
                  <p className="skills__name">{name}</p>
                  <p className="skills__info">HTML Academy&nbsp;/ <a href={cert} className="skills__cert-link" target={`blank`} rel="noopener noreferrer">certificate</a></p>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="skills__col">
          <ul className="skills__list">
            {
              skills.map((item, index) => <li ref={skill => this.skills[index] = skill} key={item}>{item}</li>)
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
