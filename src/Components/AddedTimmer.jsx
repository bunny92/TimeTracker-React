import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core/styles";
import { toAmPm } from "../timeSettings";
import Counter from "./counter";

export default function AddedTimmer(props) {
  const classes = useStyles();
  const { title, id, end_time, start_time } = props.timerList;
  const [isActive, setActive] = useState(false);
  const [editMode, setEditmode] = useState(false);
  const [titleText, setTitleText] = useState(title);

  const startButton = () => {
    setActive(true);
    props.startTimer(id);
  };

  const stopButton = () => {
    setActive(false);
    props.stopTimer(id);
  };

  const deletButton = () => {
    props.deletButton(id);
  };

  const updateData = () => {
    let updatedData = {
      title: titleText,
      id: id,
    };
    props.updatedData(updatedData);
    setEditmode(false);
  };

  const editModeSwitch = () => {
    setEditmode(!editMode);
  };

  const updatetitle = (e) => {
    setTitleText(e.target.value);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          {editMode ? (
            <Typography variant="h5" component="h2">
              <form noValidate autoComplete="off">
                <TextField
                  id="title"
                  label="Title"
                  variant="outlined"
                  value={titleText}
                  onChange={updatetitle}
                />
              </form>
              <span className={classes.icons}>
                <CheckIcon
                  fontSize="small"
                  color="primary"
                  onClick={updateData}
                />
              </span>
              <hr />
            </Typography>
          ) : (
            <Typography variant="h5" component="h2">
              {titleText}
              <span className={classes.icons}>
                <EditIcon
                  fontSize="small"
                  color="primary"
                  onClick={editModeSwitch}
                />
              </span>
              <hr />
            </Typography>
          )}

          {!isActive ? (
            <>
              <Typography className={classes.pos} color="textSecondary">
                Start:&nbsp;{start_time ? toAmPm(start_time) : "00:00:00"}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                End:&nbsp;{end_time ? toAmPm(end_time) : "00:00:00"}
              </Typography>
            </>
          ) : (
            <Counter isActive={isActive} />
          )}
        </CardContent>

        <CardActions>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {!isActive ? (
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={startButton}
                >
                  Start
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={stopButton}
                >
                  Stop
                </Button>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={deletButton}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
  },
  icons: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: "-24px",
    cursor: "pointer",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
