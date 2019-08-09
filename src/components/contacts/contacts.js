import React, {useEffect, useRef} from "react";

import "./contacts.css";
import {TimelineLite} from "gsap";

const Contacts = ({child}) => {
  const titleRef = useRef(null);
  const timeLine = new TimelineLite({paused: true});
  useEffect(() => {
    timeLine.to(titleRef.current, 0.25, {opacity: 1, y: 0}).play();
  });
  return (
    <section className='contacts'>
      <h1 ref={titleRef} className='h1 contacts__title slide-down'>
        Want to work with me?
      </h1>
      {child}
    </section>
  );
};
export default Contacts;
