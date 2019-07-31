import React from "react";

import skypeIcon from "./../../images/skype.svg";
import githubIcon from "./../../images/github.svg";
import linkedInIcon from "./../../images/linkedin.svg";

import "./social.css"

const Social = () => (
  <ul className="social">
    <li className="social__item">
      <a href="skype:live:pashkes?chat" target="_blank" rel="noopener noreferrer" className="social__link" title="My Skype">
        <svg width={22} height={22}>
          <use xlinkHref={`#${skypeIcon.id}`} />
        </svg>
      </a>
    </li>
    <li className="social__item">
      <a href="https://github.com/pashkes/" target="_blank" rel="noopener noreferrer" className="social__link" title="My Github">
        <svg width={22} height={22}>
          <use xlinkHref={`#${githubIcon.id}`} />
        </svg>
      </a>
    </li>
    <li className="social__item">
      <a href="https://www.linkedin.com/in/jabro-dev/" target="_blank" rel="noopener noreferrer" className="social__link" title="My Linked In">
        <svg width={22} height={22}>
          <use xlinkHref={`#${linkedInIcon.id}`} />
        </svg>
      </a>
    </li>
  </ul>
);

export default Social;
