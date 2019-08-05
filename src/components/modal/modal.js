import React, { useEffect, useRef } from "react"

import AcrossIcon from "../../images/icons/across.svg";
import { TimelineLite } from "gsap"

const Modal = ({deactivateModal}) => {
  const modal = useRef(null);
  let myTween = new TimelineLite({ paused: true })

  useEffect(() => {
    myTween
      .to(modal.current, .35, {opacity: 1})
      .play()
  });
  return (
    <div ref={modal} className={`modal-exp__wrapper fade`} role="document">
      <button className="modal-exp__close" id="close-modal" onClick={deactivateModal}>
        <AcrossIcon aria-hidden={true} />
      </button>
      <div className="modal-exp__body">
        <h2 className="modal-exp__title" id="exp-title">Experience</h2>
        <ul className="modal-exp__list">
          <li className="modal-exp__item">
            <p className="modal-exp__company">Ashmanov &amp;&nbsp;Partners, Moscow (remote)</p>
            <p className="modal-exp__position">Front-end developer&nbsp;/ 1&nbsp;year 3&nbsp;months</p>
          </li>
          <li className="modal-exp__item">
            <p className="modal-exp__company">MPS Development, Kiev</p>
            <p className="modal-exp__position">Front-end developer&nbsp;/ 1&nbsp;year 3&nbsp;months</p>
          </li>
          <li className="modal-exp__item">
            <p className="modal-exp__company">Syzygy Technologies Ltd, Kiev</p>
            <p className="modal-exp__position">Front-end developer&nbsp;/ 4&nbsp;months</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Modal;
