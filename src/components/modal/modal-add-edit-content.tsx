import { Button, Checkbox, FormControl, Input, InputLabel, ListItemText, MenuItem } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import { Select } from 'formik-material-ui';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { Movie } from '../movies/movies';
import { ModalGenres } from './modal-genres';
import { ModalLabel } from './modal-label';
import { useStyles } from './modal-styles';

const validationSchema = Yup.object().shape({
  title: Yup.string().required(`Title is a required field`),
  overview: Yup.string().required(`Overview is a required field`),
  posterPath: Yup.string()
    .url(`Movie URL must be a valid`)
    .required(`Movie URL is a required field`),
  runtime: Yup.number().min(0).required(`Runtime is a required field`),
  genres: Yup.array().min(1).required(`Genres is a required field`),
  releaseDate: Yup.string().required(`Release date is a required field`),
});

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
  return (
    <Formik
      initialValues={{
        genres,
        title,
        overview,
        posterPath,
        runtime,
        releaseDate,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onModalSubmit({
          ...formData,
          genres: values.genres,
          title,
          overview,
          poster_path: posterPath,
          runtime,
          release_date: releaseDate,
        });
      }}
    >
      {({ submitForm }) => (
        <Form>
          <>
            <FormikTextField
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
              onChange={(e) => setTitle(e.target.value)}
            />

            <FormikTextField
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
              onChange={(e) => setReleasedate(e.target.value)}
            />

            <FormikTextField
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
              onChange={(e) => setMovieUrl(e.target.value)}
            />

            <ModalGenres>
              <ModalLabel label="Genres" />
              <Field
                component={Select}
                name="genres"
                label="Genres"
                multiple={true}
                variant="filled"
                color="secondary"
                style={{
                  width: "100%",
                  background: "#424242",
                  marginBottom: "8px",
                  color: "white",
                }}
              >
                {genresOptions.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Field>
            </ModalGenres>

            <FormikTextField
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
              onChange={(e) => setOverview(e.target.value)}
            />
            <FormikTextField
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
              onChange={(e) => setRuntime(+e.target.value)}
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
            <Button variant="contained" color="secondary" onClick={submitForm}>
              SUBMIT
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ModalAddEditContent;
