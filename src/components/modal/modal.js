import React, {useEffect, useRef} from "react";

import AcrossIcon from "../../images/icons/across.svg";
import {TimelineLite} from "gsap";
import PropTypes from "prop-types";

const Modal = ({onDeactivateModal}) => {
  const modalDocumentRef = useRef(null);
  let tl = new TimelineLite({paused: true});

  useEffect(() => {
    tl.to(modalDocumentRef.current, 0.35, {opacity: 1}).play();
  });
  return (
    <div
      ref={modalDocumentRef}
      className={`modal-exp__wrapper fade`}
      role="document">
      <button
        className="modal-exp__close"
        id="close-modal"
        onClick={onDeactivateModal}>
        <AcrossIcon aria-hidden={true} />
      </button>
      <div className="modal-exp__body">
        <h2 className="modal-exp__title" id="exp-title">
          Experience
        </h2>
        <ul className="modal-exp__list">
          <li className="modal-exp__item">
            <p className="modal-exp__company">
              Ashmanov &amp;&nbsp;Partners, Moscow (remote)
            </p>
            <p className="modal-exp__position">
              Front-end developer&nbsp;/ 1&nbsp;year 4&nbsp;months
            </p>
          </li>
          <li className="modal-exp__item">
            <p className="modal-exp__company">MPS Development, Kiev</p>
            <p className="modal-exp__position">
              Front-end developer&nbsp;/ 1&nbsp;year
            </p>
          </li>
          <li className="modal-exp__item">
            <p className="modal-exp__company">Syzygy Technologies Ltd, Kiev</p>
            <p className="modal-exp__position">
              Front-end developer&nbsp;/ 4&nbsp;months
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onDeactivateModal: PropTypes.func.isRequired,
};

export default Modal;
