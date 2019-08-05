import React, { useState } from "react"
import AriaModal from "react-aria-modal"

import "./modal-exp.css"
import Modal from "../modal/modal"


const ModalExp = () => {
  const [isModalActive, setActiveModal] = useState(false);
  const activateModal = () => setActiveModal(!isModalActive);
  const deactivateModal = () => setActiveModal(!isModalActive);

  return (
    <>
      <button className="button-experience" onClick={activateModal}>experience</button>
      {isModalActive && <AriaModal
        titleText="My experience"
        onExit={deactivateModal}
        initialFocus="#close-modal"
        underlayColor="rgba(0,0,0,0)"
        dialogClass={`modal-exp`}
        titleId='exp-title'
        dialogStyle={{ display: `inline-flex`, width: `100%` }}
        underlayStyle={{ display: `flex`, alignItems: `center`, justifyContent: `center` }}
      >
        <Modal deactivateModal={deactivateModal}/>
      </AriaModal>}
    </>
  )
}

export default ModalExp
