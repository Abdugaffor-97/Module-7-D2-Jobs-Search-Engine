const Job = ({ id, title, imageUrl, price, changeJob, JobSelected }) => (
  <li
    onClick={() => changeJob(id)}
    className={JobSelected === id ? "border-thick card mt-3" : "card mt-3"}
    key={title}
    style={{ cursor: "pointer" }}
  >
    <div className="media card-body">
      <img className="Job-image" src={imageUrl} alt="Job cover" />
      <div>
        <p className="card-title font-weight-bold">{title}</p>
        <p>{price}</p>
      </div>
    </div>
  </li>
);

export default Job;
