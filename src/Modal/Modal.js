import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const modal = document.getElementById("demo");

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="content">
                {props.children}
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>, modal
    )
}

export default Modal;