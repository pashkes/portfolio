import React, { PureComponent } from "react";
import { TimelineLite } from "gsap";

import AcrossIcon from "../../images/icons/across.svg";

class Modal extends PureComponent {
  constructor(props) {
    super(props);

    this.myTween = new TimelineLite({ paused: true });
    this.dialog = null;
  }

  componentDidMount() {
    this.myTween
      .from(this.dialog, 0.35, {autoAlpha: 0, opacity: 0})
      .play();
  }

  render() {
    const {deactivateModal} = this.props;
    return (
      <div ref={modal => this.dialog = modal} className={`modal-exp__wrapper`} role="document">
        <button className="modal-exp__close" id="close-modal" onClick={deactivateModal}>
          <AcrossIcon />
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
}

export default Modal;
