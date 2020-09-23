import Button from '@material-ui/core/Button';
import React from 'react';

import { useStyles } from './modal-confirm-btn';
import { ModalDeleteDescription } from './modal-delete-description';

interface Props {
  onDeleteMovieHandler: (e: any) => void;
  id?: string;
}

const ModalDeleteContent = ({ onDeleteMovieHandler, id }: Props) => {
  const classes = useStyles();
  return (
    <>
      <ModalDeleteDescription>
        Are you sure you want to delete this movie?
      </ModalDeleteDescription>
      <Button
        onClick={onDeleteMovieHandler}
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
