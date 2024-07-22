import React, { useEffect } from 'react';
import Modal from 'react-modal';
import css from './ModalWindow.module.css';
import { Icon } from '../Icons/Icons';
import ModalDetails from '../ModalDetails/ModalDetails';

Modal.setAppElement('#root');

const ModalWindow = ({ isOpen, onClose, children, data }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.backdrop}
    >
      <button onClick={onClose} className={css.closeButton}>
        <Icon id="icon-close" fill="none" stroke="#101828" />
      </button>
      {data ? <ModalDetails data={data} /> : <p>No details available</p>}
    </Modal>
  );
};

export default ModalWindow;
