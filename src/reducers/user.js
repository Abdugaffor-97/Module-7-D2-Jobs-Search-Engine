const store = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_SELECTED_JOB":
      return {
        ...state,
        selectedJob: action.payload,
      };

    default:
      return state;
  }
};

export default store;
