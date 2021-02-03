import { useState } from "react";
import Joblist from "../../components/joblist";
import Button from "@material-ui/core/Button";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button>search</Button>
    </form>
  );
}

export default function Home() {
  const classes = useStyles();
  const [form, setForm] = useState({ position: "", location: "" });
  const [jobs, setJobs] = useState(null);

  const [selectedJob, setSelectedJob] = useState(null);

  const updateForm = (e) => {
    const newForm = { ...form };
    const currentId = e.target.id;
    newForm[currentId] = e.target.value;
    setForm(newForm);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const url = `https://cors-anywhere-lk.herokuapp.com/https://jobs.github.com/positions.json?description=${form.position}&full_time=true&location=${form.location}`;

      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setJobs(data);
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
        />
        <br />
        <Button variant="contained" color="secondary" type="submit">
          search
        </Button>
      </form>

      {jobs && (
        <div className="row">
          <Joblist
            jobs={jobs}
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
          />
        </div>
      )}
    </header>
  );
}
