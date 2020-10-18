import { Button, MenuItem } from '@material-ui/core';
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
  poster_path: Yup.string()
    .url(`Movie URL must be a valid`)
    .required(`Movie URL is a required field`),
  runtime: Yup.number().min(0).required(`Runtime is a required field`),
  genres: Yup.array().min(1).required(`Genres is a required field`),
  release_date: Yup.string().required(`Release date is a required field`),
});

const initialFormData = {
  genres: [],
  overview: "",
  poster_path: "",
  release_date: "",
  runtime: 0,
  title: "",
};

interface Props {
  onModalSubmit: (e: any) => void;
  formData?: Movie;
  editableMode?: boolean;
  genresOptions: string[];
}

const ModalAddEditContent = ({
  onModalSubmit,
  formData,
  editableMode,
  genresOptions,
}: Props) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={editableMode ? formData : initialFormData}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        onModalSubmit({
          id: formData?.id,
          ...values,
          runtime: +values?.runtime,
        })
      }
    >
      <Form>
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
        />

        <FormikTextField
          id="date"
          label="RELEASE DATE"
          type="date"
          variant="filled"
          name="release_date"
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
        />

        <FormikTextField
          label="Movie URL"
          name="poster_path"
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
            {genresOptions?.map((name) => (
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
        />

        <div className={classes.btns}>
          <Button variant="contained" type="reset" className={classes.btnSpace}>
            RESET
          </Button>
          <Button variant="contained" color="secondary" type="submit">
            SUBMIT
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ModalAddEditContent;
