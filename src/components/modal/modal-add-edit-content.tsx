import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useState } from 'react';

import { useStyles } from './modal-styles';

export interface AddEditFormData {
  gendre: string;
  title: string;
  overview: string;
  movieUrl: string;
  runTime: string;
  releaseDate: string;
}

interface Props {
  closeModal?: (e: any) => void;
  onModalClick: (data: any) => void;
  formData?: AddEditFormData;
  editableMode?: boolean;
}

const ModalAddEditContent = ({
  closeModal,
  onModalClick,
  formData,
  editableMode,
}: Props) => {
  const classes = useStyles();
  const [gendre, setGandre] = useState(
    editableMode ? formData?.gendre : ``
  );
  const [title, setTitle] = useState(editableMode ? formData?.title : ``);
  const [overview, setOverview] = useState(
    editableMode ? formData?.overview : ``
  );
  const [movieUrl, setMovieUrl] = useState(
    editableMode ? formData?.movieUrl : ``
  );
  const [runTime, setRunTime] = useState(
    editableMode ? formData?.runTime : ``
  );
  const [releaseDate, setReleasedate] = useState(
    editableMode ? formData?.releaseDate : ``
  );

  const handleChangeGendre = (event) => {
    setGandre(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeOverview = (event) => {
    setOverview(event.target.value);
  };

  const handleChangeMovieUrl = (event) => {
    setMovieUrl(event.target.value);
  };

  const handleChangeRunTime = (event) => {
    setRunTime(event.target.value);
  };

  const handleChangeReleaseDate = (event) => {
    setReleasedate(event.target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <>
        <TextField
          label="Title"
          name="title"
          variant="filled"
          color="secondary"
          className={classes.formControl}
          InputProps={{ className: classes.title }}
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.focusedLabel,
            },
          }}
          value={title}
          onChange={handleChangeTitle}
        />
        <TextField
          id="date"
          label="RELEASE DATE"
          type="date"
          variant="filled"
          name="releaseDate"
          color="secondary"
          className={classes.formControl}
          InputProps={{ className: classes.title }}
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.focusedLabel,
            },
            shrink: true,
          }}
          value={releaseDate}
          onChange={handleChangeReleaseDate}
        />
        <TextField
          label="Movie URL"
          name="movieUrl"
          variant="filled"
          color="secondary"
          className={classes.formControl}
          InputProps={{ className: classes.title }}
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.focusedLabel,
            },
          }}
          value={movieUrl}
          onChange={handleChangeMovieUrl}
        />
        <FormControl
          variant="filled"
          color="secondary"
          className={classes.formControl}
        >
          <InputLabel className={classes.label}>Gendre</InputLabel>
          <Select
            value={gendre}
            onChange={handleChangeGendre}
            className={classes.title}
          >
            <MenuItem value={"cartoon"}>Cartoon</MenuItem>
            <MenuItem value={"horror"}>Horror</MenuItem>
            <MenuItem value={"documentary"}>Documentary</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Overview"
          name="overview"
          variant="filled"
          color="secondary"
          className={classes.formControl}
          InputProps={{ className: classes.title }}
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.focusedLabel,
            },
          }}
          value={overview}
          onChange={handleChangeOverview}
        />
        <TextField
          label="Runtime"
          name="runtime"
          variant="filled"
          color="secondary"
          className={classes.formControl}
          InputProps={{ className: classes.title }}
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.focusedLabel,
            },
          }}
          value={runTime}
          onChange={handleChangeRunTime}
        />
      </>
      <div className={classes.btns}>
        <Button
          variant="contained"
          onClick={closeModal}
          className={classes.btnSpace}
        >
          RESET
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={(_) => {
            onModalClick({
              gendre,
              title,
              overview,
              releaseDate,
              movieUrl,
              runTime,
            });
          }}
        >
          SUBMIT
        </Button>
      </div>
    </form>
  );
};

export default ModalAddEditContent;
