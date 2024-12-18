import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; 
import '../Modal/Modal.css'; 

function ModalOn({ open, onClose, children }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            center
            classNames={{ overlay: 'customOverlay', modal: 'customModal' }}
        >
            {children}
        </Modal>
    );
}

export default ModalOn;
