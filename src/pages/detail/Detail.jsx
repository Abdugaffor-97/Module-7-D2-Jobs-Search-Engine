export default function Detail({ selectedJob }) {
  return selectedJob ? (
    <div className="col-md-8">
      <div className="row mt-2">
        <div className="col-sm-12">
          <h1>{selectedJob.title}</h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-5 mt-3">
          <img
            className="book-cover"
            src={selectedJob.imageUrl}
            alt="book selected"
          />
        </div>
        <div className="col-sm-7">
          <p>
            <span className="font-weight-bold">Description:</span>{" "}
            {selectedJob.description}
          </p>
          <p>
            <span className="font-weight-bold"></span> {selectedJob.type}
          </p>
          <button onClick={() => this.props.addToCart(selectedJob.id)}>
            Add Campare
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="col-sm-8">
      <div className="row mt-2">
        <div className="col-sm-12">
          <h3>Please select a Job!</h3>
        </div>
      </div>
    </div>
  );
}
