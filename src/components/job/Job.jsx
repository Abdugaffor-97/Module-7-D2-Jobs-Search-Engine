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

const Job = (props) => {
  const dispatch = useDispatch();
  const { fav_list } = useSelector((state) => state.compare);
  const [checked, setChecked] = React.useState(
    props.job.id === fav_list.find((fav_job) => props.job.id === fav_job.id)
  );

  return props.job ? (
    <div className="job-container" style={{ position: "relative" }}>
      <FormControlLabel
        style={{ textAlign: "left" }}
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            name="checkedA"
            onClick={() => dispatch(addToFavourite(props.job))}
            style={{ textAlign: "left" }}
          />
        }
        label="Add To Compare"
      />
      {console.log(
        "s",
        fav_list.find((fav_job) => props.job.id === fav_job.id)
      )}
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
      <Button
        component={Link}
        to={`/details/${props.job.id}`}
        variant="contained"
        color="primary"
        onClick={() => dispatch(setSelectedJob(props.job))}
      >
        Details
      </Button>
    </div>
  ) : (
    JSON.stringify(props)
  );
};

export default Job;
