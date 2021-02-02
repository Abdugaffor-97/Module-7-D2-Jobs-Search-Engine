import Job from "../job";

function Joblist({ jobs, setSelectedJob, selectedJob }) {
  return (
    <ul className="col-md-4">
      {jobs.map((job, idx) => (
        <Job
          {...job}
          key={idx}
          setSelectedJob={setSelectedJob}
          selectedJob={selectedJob}
        />
      ))}
    </ul>
  );
}

export default Joblist;
