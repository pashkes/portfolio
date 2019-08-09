import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {TimelineLite} from "gsap";

import "./work.css";

const Work = ({
  index,
  title,
  description,
  skills,
  demoLink,
  githubLink,
  preview,
}) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const skillsRef = useRef(null);
  const previewPhotoRef = useRef(null);
  const buttonsMobileRef = useRef(null);

  const tl = new TimelineLite({paused: true});

  useEffect(() => {
    tl.to(titleRef.current, 0.45, {opacity: 1, y: 0})
      .to(subtitleRef.current, 0.25, {opacity: 1, y: 0}, "-=0.2")
      .to(skillsRef.current, 0.25, {y: 0, opacity: 1})
      .to(buttonsRef.current, 0.25, {opacity: 1, y: 0})
      .to(previewPhotoRef.current, 1, {opacity: 1, x: 0, scale: 1}, "-=0.2")
      .to(buttonsMobileRef.current, 0.25, {opacity: 1, y: 0}, "-=0.6")
      .to(previewPhotoRef.current, 2, {opacity: 1, x: 0, scale: 1})
      .play();
  }, [index]);

  return (
    <section className='work'>
      <div className='work__info'>
        <h1 className='work__title h1 slide-down' ref={titleRef}>
          {title}
        </h1>
        <p
          className='work__subtitle slide-down'
          dangerouslySetInnerHTML={{__html: description}}
          ref={subtitleRef}
        />
        <ul className='work__techs slide-down' ref={skillsRef}>
          {skills.split(` `).map((skill) => (
            <li key={skill}>{skill} </li>
          ))}
        </ul>
        <div
          className='work__buttons only-for-desktop slide-down'
          ref={buttonsRef}>
          <a href={demoLink} className='work__button button'>
            Discover
          </a>
          <a href={githubLink} className='work__button button'>
            view code
          </a>
        </div>
      </div>
      <div className='work__screen'>
        <div className='work__preview slide-down-fade' ref={previewPhotoRef}>
          <img src={`/img/${preview}`} alt={`Screen ${title}`} />
        </div>
        <div
          className='work__buttons only-for-mobile slide-down'
          ref={buttonsMobileRef}>
          <a href={demoLink} className='work__button button'>
            Discover
          </a>
          <a href={githubLink} className='work__button button'>
            view code
          </a>
        </div>
      </div>
    </section>
  );
};

Work.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default Work;
