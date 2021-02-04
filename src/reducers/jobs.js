const jobs = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_JOB_LIST":
      return {
        ...state,
        joblist: action.payload,
      };

    default:
      return state;
  }
};

export default jobs;
