import React from "react";

import SkypeIcon from "./../../images/icons/skype.svg";
import GithubIcon from "./../../images/icons/github.svg";
import LinkedInIcon from "./../../images/icons/linkedin.svg";

import "./social.css";

const Social = () => (
  <ul className="social">
    <li className="social__item">
      <a
        href="skype:live:pashkes?chat"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="My Skype">
        <SkypeIcon aria-hidden={true} />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://github.com/pashkes/"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="My Github">
        <GithubIcon aria-hidden={true} />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://www.linkedin.com/in/jabro-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title="My Linked In">
        <LinkedInIcon aria-hidden={true} />
      </a>
    </li>
  </ul>
);

export default Social;
