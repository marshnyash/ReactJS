import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import { useStyles } from './modal-styles';
import { ModalTitle } from './modal-title';

interface Props {
  className?: string;
  title: string;
  children: Element;
  showModal: boolean;
  closeModal: (e: any) => void;
}

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "40px",
    borderRadius: "7px",
    border: "none",
    background: "#232323",
    minWidth: "350px",
  },
};
// ReactModal.setAppElement("#root");

const ModalComponent = ({
  title,
  children,
  showModal,
  closeModal,
  className,
}: Props) => {
  const classes = useStyles();

  return (
    <section className={className}>
      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyle}
        overlayClassName="Overlay"
      >
        <ModalTitle>{title}</ModalTitle>
        <CloseIcon
          className={classes.closeIconBtn}
          fontSize="large"
          onClick={closeModal}
        />
        {children}
      </ReactModal>
    </section>
  );
};

export const Modal = styled(ModalComponent)`
  display: ${({ showModal }: Props) => (showModal ? "block" : "none")};
  background: #353535bf;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default Modal;
