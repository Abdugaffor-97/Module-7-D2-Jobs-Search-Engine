import { connect } from "react-redux";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const mapStateToProps = (state) => state;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Detail = ({ selectedJob }) => {
  console.log(selectedJob);
  const classes = useStyles();

  return (
    <div style={{ textAlign: "start", margin: "10px 15px" }}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={selectedJob.company_logo}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {selectedJob.company}{" "}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                </Grid>
                <Grid item>
                  <a href={selectedJob.url} target="_blank" rel="noreferrer">
                    Apply
                  </a>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  {selectedJob.created_at}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <div>
        <h3>
          Company: {selectedJob.company}{" "}
          <a href={selectedJob.company_url} rel="noreferrer" target="_blank">
            more details
          </a>
        </h3>
        <div>Posted: {selectedJob.created_at}</div>

        <p dangerouslySetInnerHTML={{ __html: selectedJob.description }}></p>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Detail);
