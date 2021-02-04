import { useState } from "react";
import Joblist from "../../components/joblist";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const mapStateToProps = (state) => state.jobs;

const mapDispatchToProps = (dispatch) => ({
  addToFavourite: (id) =>
    dispatch({
      type: "ADD_JOB_TO_FAVOURITE",
      payload: id,
    }),

  setJobs: (form) => {
    dispatch(async (dispatch, getState) => {
      const url = `https://cors-anywhere-lk.herokuapp.com/https://jobs.github.com/positions.json?description=${form.position}&full_time=true&location=${form.location}`;
      const res = await fetch(url);

      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: "UPDATE_JOB_LIST",
          payload: data,
        });

        return getState();
      } else {
        dispatch({
          type: "SET_JOB_LIST_ERROR",
          payload: res.statusText,
        });
      }
    });
  },
});

const Home = (props) => {
  const classes = useStyles();
  const [form, setForm] = useState({ position: "", location: "" });
  const [loading, setLoading] = useState(false);

  const updateForm = (e) => {
    const newForm = { ...form };
    const currentId = e.target.id;
    newForm[currentId] = e.target.value;
    setForm(newForm);
  };

  const submitForm = async (e) => {
    setLoading(true);
    if (e) {
      e.preventDefault();
    }
    const res = await props.setJobs(form);
    console.log(res);
    setLoading(false);
  };

  return (
    <header>
      <form
        onSubmit={submitForm}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="position"
          value={form.position}
          type="text"
          name="position"
          onChange={updateForm}
          label="Position"
        />
        <br />
        <TextField
          id="location"
          value={form.location}
          type="text"
          name="location"
          onChange={updateForm}
          label="Location"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              submitForm(e);
            }
          }}
        />
        <br />
        <Button variant="contained" color="secondary" type="submit">
          search
        </Button>
      </form>

      {loading && <LinearProgress />}
      {props.joblist && (
        <div className="row">
          <Joblist jobs={props.joblist} />
        </div>
      )}
    </header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
