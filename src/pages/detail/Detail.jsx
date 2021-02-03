import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const Detail = ({ selectedJob }) => {
  console.log(selectedJob);
  return (
    <div style={{ textAlign: "start", margin: "10px 15px" }}>
      <div>
        <h3>
          Company: {selectedJob.company}{" "}
          <a href={selectedJob.company_url} rel="noreferrer" target="_blank">
            more details
          </a>
        </h3>
        <div>Posted: {selectedJob.created_at}</div>

        <p dangerouslySetInnerHTML={{ __html: selectedJob.description }}></p>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Detail);
