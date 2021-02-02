import Job from "../job";

function Joblist({ jobs, changeJob, selectedJob }) {
  return (
    <ul>
      {jobs.map((job, idx) => (
        <Job
          {...job}
          key={idx}
          changeJob={changeJob}
          selectedJob={selectedJob}
        />
      ))}
    </ul>
  );
}

export default Joblist;
