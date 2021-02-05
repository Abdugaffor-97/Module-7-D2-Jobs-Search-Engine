import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import GradeIcon from "@material-ui/icons/Grade";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            component={Link}
            align="left"
            variant="h6"
            to={"/"}
            className={classes.title}
          >
            <b>GitHub</b> Jobs
          </Typography>
          <Typography align="right">
            <GradeIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
