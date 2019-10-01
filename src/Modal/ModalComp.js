import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

Modal.setAppElement('#demo');

const ModalComp = (props) => {
    return (
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
            >
                {props.children}
            </Modal>
        )
}

ModalComp.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
}

export default ModalComp;