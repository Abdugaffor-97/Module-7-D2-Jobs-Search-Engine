import Job from "../job";

function Joblist({ jobs }) {
  return (
    <>
      {jobs.map((job, idx) => (
        <Job job={job} key={idx} />
      ))}
    </>
  );
}

export default Joblist;
