import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Newtimer(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const sendTitle = (e) => {
    e.preventDefault();
    props.addTimmer(title);
  };

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Create Timmer
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
          autoFocus
          onChange={handleTitle}
          value={title}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={sendTitle}
        >
          Activate Counter
        </Button>
      </form>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
