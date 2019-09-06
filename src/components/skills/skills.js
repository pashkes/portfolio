import React, {useEffect, useRef} from "react";
import {TimelineLite} from "gsap";

import "./skills.css";

const skills = [
  `React`,
  `Redux`,
  `TypeScript`,
  `JS(ES5+)`,
  "Gatsby",
  `HTML`,
  `CSS`,
  "Sass",
  "pug",
  `Jest`,
  `Enzyme`,
  "Unit tests | E2E | Snapshot",
  "Accessibility",
  "Performance optimization",
];

const courses = [
  {
    name: `Javascript, Level&nbsp;3 (React.js)`,
    cert: `https://assets.htmlacademy.ru/certificates/intensive/133/164879.pdf`,
    company: `HTML Academy`,
  },
  {
    name: `Javascript, Level&nbsp;2`,
    cert: `https://assets.htmlacademy.ru/certificates/intensive/131/164879.pdf`,
    company: `HTML Academy`,
  },
  {
    name: `Javascript, Level&nbsp;1`,
    cert: `https://assets.htmlacademy.ru/certificates/intensive/55/164879.pdf`,
    company: `HTML Academy`,
  },
  {
    name: `HTML and CSS, Level&nbsp;2`,
    cert: `https://assets.htmlacademy.ru/certificates/intensive/24/164879.pdf`,
    company: `HTML Academy`,
  },
  {
    name: `HTML and CSS, Level&nbsp;1`,
    cert: `https://assets.htmlacademy.ru/certificates/intensive/18/164879.pdf`,
    company: `HTML Academy`,
  },
  {
    name: `General English – Pre-intermediate`,
    cert: `https://drive.google.com/file/d/1VChCHLdwiZceeUTOCq2ZoCLCGwzIV7Yc/view`,
    company: `Skyeng`,
  },
  {
    name: `General English – Elementary `,
    cert: `https://drive.google.com/file/d/0B2WaTCbThw1GVjluTnMzZmxmV0RKWUozZHFic0xJUDZhYWVJ/view`,
    company: `Skyeng`,
  },
];

const Skills = () => {
  const coursesRef = useRef([]);
  const skillsRef = useRef([]);
  const textRef = useRef(null);
  const tl = new TimelineLite({paused: true});

  useEffect(() => {
    tl.to(textRef.current, 0.6, {opacity: 1, y: 0})
      .staggerTo(coursesRef.current, 0.25, {x: 0, opacity: 1}, 0.1, `-=.3`)
      .staggerTo(skillsRef.current, 0.25, {x: 0, opacity: 1}, 0.1, `-=.4`)
      .play();
    return () => tl.clear();
  });

  return (
    <section className="skills">
      <h2 className="invisible">Skills</h2>
      <div className="skills__col">
        <p className="skills__subtitle slide-down" ref={textRef}>
          Skills can be&nbsp;taught, personality is&nbsp;inherent. I&nbsp;prefer
          to&nbsp;keep learning, continue challenging myself, and
          do&nbsp;interesting things that matter.
        </p>
        <ul className="skills__courses">
          {courses.map(({name, cert, company}, index) => (
            <li
              key={name}
              className={`slide-right`}
              ref={(course) => (coursesRef.current[index] = course)}>
              <p
                className="skills__name"
                dangerouslySetInnerHTML={{__html: name}}
              />
              <p className="skills__info">
               {company}&nbsp;/{" "}
                <a
                  href={cert}
                  className="skills__cert-link link"
                  target={`blank`}
                  rel="noopener noreferrer">
                  certificate
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills__col">
        <ul className="skills__list">
          {skills.map((item, index) => (
            <li
              className={`slide-right`}
              ref={(skill) => (skillsRef.current[index] = skill)}
              key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
