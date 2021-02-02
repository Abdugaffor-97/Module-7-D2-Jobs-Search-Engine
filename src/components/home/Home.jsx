import { useState } from "react";
import Joblist from "../joblist";
import JobDetail from "../detail";

export default function Home() {
  const [form, setForm] = useState({ position: "", location: "" });
  const [jobs, setJobs] = useState(null);

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
      <form onSubmit={submitForm}>
        <label htmlFor="position">Postion </label>
        <input
          id="position"
          value={form.position}
          type="text"
          name="position"
          onChange={updateForm}
        />
        <br />
        <br />
        <label htmlFor="location">Location </label>
        <input
          id="location"
          value={form.location}
          type="text"
          name="location"
          onChange={updateForm}
        />
        <br />
        <br />
        <button type="submit">Search</button>
      </form>

      {jobs && (
        <div className="row">
          <h3>Results</h3>
          <Joblist jobs={jobs} />
          <JobDetail />
        </div>
      )}
    </header>
  );
}
