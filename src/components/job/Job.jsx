import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

const mapDispatchToProps = (dispatch) => ({
  setSelectedJob: (job) =>
    dispatch({
      type: "UPDATE_SELECTED_JOB",
      payload: job,
    }),

  addToFavourite: (job) => {
    dispatch({
      type: "ADD_JOB_TO_FAVOURITE",
      payload: job,
    });
  },
});

const Job = (props) => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return props.job ? (
    <div className="job-container" style={{ position: "relative" }}>
      <FormControlLabel
        style={{ textAlign: "left" }}
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            onClick={props.addToFavourite(props.job)}
            style={{ textAlign: "left" }}
          />
        }
        label="Add To Compare"
      />
      <div className="media card-body">
        <img
          className="job-image"
          src={props.job.company_logo}
          alt="Job cover"
        />
        <div>
          <p className="card-title font-weight-bold">{props.job.title}</p>
          <p>{props.job.company}</p>
        </div>
      </div>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={props.addToFavourite(props.job)}
      >
        <Checkbox
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
        />
        Add To Compare
      </Button> */}

      <Button
        component={Link}
        to={`/details/${props.job.id}`}
        variant="contained"
        color="primary"
        onClick={() => props.setSelectedJob(props.job)}
      >
        Details
      </Button>
    </div>
  ) : (
    JSON.stringify(props)
  );
};

export default connect(null, mapDispatchToProps)(Job);
