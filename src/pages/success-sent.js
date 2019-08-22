import React, {useEffect, useRef} from "react";
import {TimelineLite} from "gsap";

import SEO from "../components/seo/seo";
import Contacts from "../components/contacts/contacts";
import {Link} from "gatsby";

const SuccessPage = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const tl = new TimelineLite({paused: false});
  useEffect(() => {
    tl.to(textRef.current, 0.25, {opacity: 1, y: 0}, "+=0.25")
      .to(buttonRef.current, 0.25, {opacity: 1, y: 0})
      .play();
  });
  return (
    <>
      <SEO title="The form has been success sent" />
      <Contacts
        child={
          <>
            <p className={`success-sent-text slide-down`} ref={textRef}>
              Your message has been successfully send. I&rsquo;ll write you
              soon.
            </p>
            <div className="contacts__button-home slide-down" ref={buttonRef}>
              <Link className="button" to={`/`}>
                Back Home
              </Link>
            </div>
          </>
        }
      />
    </>
  );
};

export default SuccessPage;
