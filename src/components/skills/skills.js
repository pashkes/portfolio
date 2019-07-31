import React from "react";

import "./skills.css";

const Skills = () => (
  <section className="skills">
    <h2 className="invisible">Skills</h2>
    <div className="skills__col">
      <p className="skills__subtitle">Skills can be&nbsp;taught, personality is&nbsp;inherent. I&nbsp;prefer
        to&nbsp;keep
        learning, continue challenging myself, and do&nbsp;interesting things that matter.</p>
      <ul className="skills__courses">
        <li>
          <p className="skills__name">Javascript, Level&nbsp;3 (React.js)</p>
          <p className="skills__info">HTML Academy&nbsp;/ <a href="/" className="skills__cert-link">certificate</a></p>
        </li>
        <li>
          <p className="skills__name">Javascript, Level&nbsp;2</p>
          <p className="skills__info">HTML Academy&nbsp;/ <a href="/" className="skills__cert-link">certificate</a></p>
        </li>
        <li>
          <p className="skills__name">Javascript, Level&nbsp;1</p>
          <p className="skills__info">HTML Academy&nbsp;/ <a href="/" className="skills__cert-link">certificate</a></p>
        </li>
        <li>
          <p className="skills__name">HTML and CSS, Level&nbsp;2</p>
          <p className="skills__info">HTML Academy / <a href="/" className="skills__cert-link">certificate</a></p>
        </li>
        <li>
          <p className="skills__name">HTML and CSS, Level&nbsp;1</p>
          <p className="skills__info">HTML Academy / <a href="/" className="skills__cert-link">certificate</a></p>
        </li>
      </ul>
    </div>
    <div className="skills__col">
      <ul className="skills__list">
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Redux</li>
        <li>CSS</li>
        <li>JS</li>
        <li>HTML</li>
        <li>Enzyme</li>
        <li>Jest</li>
        <li>pug</li>
      </ul>
    </div>
  </section>
)

export default Skills
