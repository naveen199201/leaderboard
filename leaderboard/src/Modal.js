// Modal.js
import React from 'react';
import './Modal.css';
import FormComponent from './FormComponent';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; 

    return (
        <div className={`modal ${isOpen ? 'modal-show' : ''}`}>

            <div className="modal-content">
            <div className='modal-header'>Add LeaderBoard Entry
            <span className="close" onClick={onClose}>&times;</span>
            </div>

                <FormComponent closeModal={onClose}/>
            </div>
        </div>
    );
};

export default Modal;
