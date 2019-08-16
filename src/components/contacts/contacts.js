import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import "./contacts.css";
import {TimelineLite} from "gsap";

const Contacts = ({child}) => {
  const titleRef = useRef(null);
  const timeLine = new TimelineLite({paused: true});
  useEffect(() => {
    timeLine.to(titleRef.current, 0.25, {opacity: 1, y: 0}).play();
  });
  return (
    <section className="contacts">
      <h2 ref={titleRef} className="h1 contacts__title slide-down">
        Want to work with me?
      </h2>
      {child}
    </section>
  );
};

Contacts.propTypes = {
  child: PropTypes.node,
};

export default Contacts;
