import Button from "@material-ui/core/Button";

const Job = ({
  id,
  title,
  company_logo,
  company,
  setSelectedJob,
  JobSelected,
}) => (
  <div
    onClick={() => setSelectedJob(id)}
    className={JobSelected === id ? "border-thick " : "job-container"}
    key={title}
  >
    <div className="media card-body">
      <img className="job-image" src={company_logo} alt="Job cover" />
      <div>
        <p className="card-title font-weight-bold">{title}</p>
        <p>{company}</p>
      </div>
    </div>
    <Button variant="contained" color="primary">
      Add To Compare
    </Button>
    <Button variant="contained" color="primary">
      Details
    </Button>
  </div>
);

export default Job;
