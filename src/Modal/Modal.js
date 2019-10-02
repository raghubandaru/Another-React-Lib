import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./Modal.css";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="content">
                {props.children}
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>, props.modal
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    modal: PropTypes.object.isRequired
}

export default Modal;