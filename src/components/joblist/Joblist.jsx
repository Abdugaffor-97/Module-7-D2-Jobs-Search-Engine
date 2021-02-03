import Job from "../job";

function Joblist({ jobs, setSelectedJob, selectedJob }) {
  return (
    <>
      {jobs.map((job, idx) => (
        <Job
          {...job}
          key={idx}
          setSelectedJob={setSelectedJob}
          selectedJob={selectedJob}
        />
      ))}
    </>
  );
}

export default Joblist;
