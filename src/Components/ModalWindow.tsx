import React from "react";
import "../Assets/css/modal.css";

import Modal from "react-modal";
Modal.setAppElement("#root");

interface Props {
  title: string;
  isOpen: boolean;
  onClose: (event: any) => void;
  children: any;
}

export default function ModalWindow(props: Props) {
  const { title, isOpen, onClose, children } = props;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      className='mymodal'
      overlayClassName='myoverlay'
      closeTimeoutMS={500}
    >
      {children}
    </Modal>
  );
}
