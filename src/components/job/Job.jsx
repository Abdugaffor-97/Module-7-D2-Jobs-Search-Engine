import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  setSelectedJob: (job) =>
    dispatch({
      type: "UPDATE_SELECTED_JOB",
      payload: job,
    }),
});

const Job = (props) =>
  props.job ? (
    <div className="job-container">
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
      <Button variant="contained" color="primary">
        Add To Compare
      </Button>
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

export default connect(null, mapDispatchToProps)(Job);
