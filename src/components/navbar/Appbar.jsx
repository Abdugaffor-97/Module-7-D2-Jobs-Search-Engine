import React from "react";
import useStyles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

export default function MenuAppBar() {
  const classes = useStyles();
  const { fav_list } = useSelector((state) => state.compare);

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
          <Badge badgeContent={fav_list.length} color="secondary">
            <Typography
              variant="h6"
              align="right"
              component={Link}
              to="/compare"
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
