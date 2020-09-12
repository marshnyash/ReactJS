import Button from '@material-ui/core/Button';
import React from 'react';

import { useStyles } from './modal-confirm-btn';
import { ModalDeleteDescription } from './modal-delete-description';

interface Props {
  closeModal: (e: any) => void;
}

const ModalDeleteContent = ({ closeModal }: Props) => {
  const classes = useStyles();
  return (
    <>
      <ModalDeleteDescription>
        Are you sure you want to delete this movie?
      </ModalDeleteDescription>
      <Button
        onClick={closeModal}
        className={classes.btn}
        variant="contained"
        color="secondary"
      >
        CONFIRM
      </Button>
    </>
  );
};

export default ModalDeleteContent;
