import React from "react";
import AriaModal from "react-aria-modal";

import "./modal-exp.css";
import AcrossIcon from "./../../images/across.svg";

class ModalExp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false,
    };
  }

  activateModal = () => {
    this.setState({ modalActive: true });
  }

  deactivateModal = () => {
    this.setState({ modalActive: false });
  }

  render() {
    const modal = this.state.modalActive
      ? <AriaModal
        titleText="My experience"
        onExit={this.deactivateModal}
        initialFocus="#close-modal"
        underlayColor="rgba(0,0,0,0)"
        dialogClass={`modal-exp`}
        titleId='exp-title'
        dialogStyle={{display: `inline-flex`, width: `100%`}}
        underlayStyle={{display: `flex`, alignItems: `center`, justifyContent: `center`}}
      >
        <div className="modal-exp__wrapper" role="document">
          <button className="modal-exp__close" id="close-modal" onClick={this.deactivateModal}>
            <svg width={18} height={18}>
              <use xlinkHref={`#${AcrossIcon.id}`}/>
            </svg>
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
      </AriaModal>
      : false

    return (
      <>
        <button className="button-experience" onClick={this.activateModal}>experience</button>
        {modal}
      </>
    );
  }
}

export default ModalExp
