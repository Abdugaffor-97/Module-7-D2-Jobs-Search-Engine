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

const mapDispatchToProps = (dispatch) => ({
  addToFavourite: (id) =>
    dispatch({
      type: "ADD_JOB_TO_FAVOURITE",
      payload: id,
    }),
});

const Home = () => {
  const classes = useStyles();
  const [form, setForm] = useState({ position: "", location: "" });
  const [jobs, setJobs] = useState(null);
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

    try {
      const url = `https://cors-anywhere-lk.herokuapp.com/https://jobs.github.com/positions.json?description=${form.position}&full_time=true&location=${form.location}`;

      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setJobs(data);
        setLoading(false);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
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
      {jobs && (
        <div className="row">
          <Joblist jobs={jobs} />
        </div>
      )}
    </header>
  );
};

export default connect(mapDispatchToProps)(Home);
