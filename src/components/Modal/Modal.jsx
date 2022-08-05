import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';

const Modal = (props) => {
    const [active, setActive] = useState(false);
    console.log(active);
    useEffect(() => {
        setActive(props.active);
    }, [props.active]);
    return <div className={`modal ${active ? 'active' : ''}`}>{props.children}</div>;
};

Modal.propTypes = {
    active: PropTypes.bool,
};

export const ModalContent = (props) => {
    const contentRef = useRef(null);
    const handleCloseModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose();
    };
    return (
        <div ref={contentRef} className="modal-content">
            {props.children}
            <div className="absolute right-1 top-1 cursor-pointer hover:text-primary-900" onClick={handleCloseModal}>
                <IoIosClose className="text-white text-3xl" />
            </div>
        </div>
    );
};
ModalContent.propTypes = {
    onClose: PropTypes.func,
};

export default Modal;
