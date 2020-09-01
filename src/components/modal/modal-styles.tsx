import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(1),
    background: "#424242",
  },
  title: {
    color: "#ffffff",
    fontWeight: 300,
  },
  btns: {
    display: "flex",
    justifyContent: "flex-end",
  },
  btnSpace: {
    marginRight: theme.spacing(1),
  },
  label: {
    color: "#F65261",
    textTransform: "uppercase",
    "&$focusedLabel": {
      color: "#F65261",
    },
  },
  focusedLabel: {},
  closeIconBtn: {
    color: "white",
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
}));
