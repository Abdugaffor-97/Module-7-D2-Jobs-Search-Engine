const Job = ({
  id,
  title,
  company_logo,
  company,
  setSelectedJob,
  JobSelected,
}) => (
  <li
    onClick={() => setSelectedJob(id)}
    className={JobSelected === id ? "border-thick card mt-3" : "card mt-3"}
    key={title}
    style={{ cursor: "pointer" }}
  >
    <div className="media card-body">
      <img className="job-image" src={company_logo} alt="Job cover" />
      <div>
        <p className="card-title font-weight-bold">{title}</p>
        <p>{company}</p>
      </div>
    </div>
  </li>
);

export default Job;
