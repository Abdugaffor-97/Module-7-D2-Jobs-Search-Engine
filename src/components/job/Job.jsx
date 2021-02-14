import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import {
  addToFavourite,
  setSelectedJob,
  removeFromFavourite,
} from "../../reducers/actions";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ job }) => {
  const dispatch = useDispatch();
  const { fav_list } = useSelector((state) => state.compare);

  const [checked, setChecked] = React.useState(
    job.id === fav_list.find((fav_job) => job.id === fav_job.id)
  );
  console.log(job.id);
  console.log(checked);

  const toggleFavJob = (job) => {
    if (checked) {
      dispatch(removeFromFavourite(job.id));
    } else {
      dispatch(addToFavourite(job));
    }
  };

  return job ? (
    <div className="job-container" style={{ position: "relative" }}>
      <FormControlLabel
        style={{ textAlign: "left" }}
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            name="checkedA"
            onClick={() => toggleFavJob(job)}
            style={{ textAlign: "left" }}
          />
        }
        label="Add To Compare"
      />
      <div className="media card-body">
        <img className="job-image" src={job.company_logo} alt="Job cover" />
        <div>
          <p className="card-title font-weight-bold">{job.title}</p>
          <p>{job.company}</p>
        </div>
      </div>
      <Button
        component={Link}
        to={`/details/${job.id}`}
        variant="contained"
        color="primary"
        onClick={() => dispatch(setSelectedJob(job))}
      >
        Details
      </Button>
    </div>
  ) : (
    JSON.stringify(job)
  );
};

export default Job;
