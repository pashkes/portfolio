import React from "react"
import AriaModal from "react-aria-modal"

import "./modal-exp.css"
import Modal from "../modal/modal"

class ModalExp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalActive: false,
    }
  }

  activateModal = () => {
    this.setState({ modalActive: true })
  }

  deactivateModal = () => {
    this.setState({ modalActive: false })
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
        dialogStyle={{ display: `inline-flex`, width: `100%` }}
        underlayStyle={{ display: `flex`, alignItems: `center`, justifyContent: `center` }}
      >
        <Modal deactivateModal={this.deactivateModal} />
      </AriaModal>
      : false

    return (
      <>
        <button className="button-experience" onClick={this.activateModal}>experience</button>
        {modal}
      </>
    )
  }
}

export default ModalExp
