import { Button, Checkbox, FormControl, Input, InputLabel, ListItemText, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useState } from 'react';

import { Movie } from '../movies/movies';
import { useStyles } from './modal-styles';

interface Props {
  closeModal?: (e: any) => void;
  onModalSubmit: (e: any) => void;
  formData?: Movie;
  editableMode?: boolean;
  genresOptions: string[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ModalAddEditContent = ({
  closeModal,
  onModalSubmit,
  formData,
  editableMode,
  genresOptions,
}: Props) => {
  const classes = useStyles();
  const [genres, setGenres] = useState(editableMode ? formData?.genres : []);
  const [title, setTitle] = useState(editableMode ? formData?.title : ``);
  const [overview, setOverview] = useState(
    editableMode ? formData?.overview : ``
  );
  const [posterPath, setMovieUrl] = useState(
    editableMode ? formData?.poster_path : ``
  );
  const [runtime, setRuntime] = useState(editableMode ? formData?.runtime : ``);
  const [releaseDate, setReleasedate] = useState(
    editableMode ? formData?.release_date : ``
  );

  const handleChangeGenres = (event) => {
    setGenres(event.target.value as string[]);
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

  const handleChangeRuntime = (event) => {
    setRuntime(+event.target.value);
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
          name="posterPath"
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
          value={posterPath}
          onChange={handleChangeMovieUrl}
        />
        <FormControl
          variant="filled"
          color="secondary"
          className={classes.formControl}
        >
          <InputLabel className={classes.label}>Genres</InputLabel>
          <Select
            multiple
            value={genres}
            onChange={handleChangeGenres}
            className={classes.title}
            input={<Input style={{ marginLeft: "15px" }} />}
            renderValue={(selected) => (selected as string[]).join(", ")}
            MenuProps={MenuProps}
          >
            {genresOptions.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={genres.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
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
          value={runtime}
          onChange={handleChangeRuntime}
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
            onModalSubmit({
              ...formData,
              genres,
              title,
              overview,
              poster_path: posterPath,
              runtime,
              release_date: releaseDate,
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
