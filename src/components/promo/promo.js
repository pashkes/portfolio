import React, {useEffect, useRef} from "react";
import {Link} from "gatsby";
import {TimelineLite} from "gsap";

import "./promo.css";

const Promo = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const tl = new TimelineLite({paused: true});

  useEffect(() => {
    tl.to(titleRef.current, 0.25, {y: 0, opacity: 1})
      .to(paragraphRef.current, 0.25, {y: 0, opacity: 1}, "-=0.1")
      .to(buttonRef.current, 0.25, {y: 0, opacity: 1}, "-=0.1")
      .play();
  });

  return (
    <section className='promo'>
      <h1 ref={titleRef} className='promo__title h1 slide-down'>
        I&rsquo;m Front-end developer from Kyiv, Ukraine
      </h1>
      <p className={`promo__subtitle slide-down`} ref={paragraphRef}>
        I&nbsp;don&rsquo;t like to&nbsp;define myself by&nbsp;the work
        I&rsquo;ve done. I&nbsp;define myself by&nbsp;the work&nbsp;I want
        to&nbsp;do.
      </p>
      <div ref={buttonRef} className={`slide-down`}>
        <Link className={`promo__button button`} to={`/contacts`}>
          hire me
        </Link>
      </div>
    </section>
  );
};

export default Promo;
