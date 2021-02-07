import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";

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
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    marginRight: theme.spacing(4),
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
          <Badge badgeContent={4} color="secondary">
            <Typography
              variant="h6"
              align="right"
              component={Link}
              to="compare/:id"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "white",
              }}
            >
              Compare
            </Typography>
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
}
