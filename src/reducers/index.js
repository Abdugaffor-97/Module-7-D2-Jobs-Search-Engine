const store = (state = {}, action) => {
  switch (action.type) {
    case "ADD_JOB_TO_FAVOURITE":
      return {
        ...state,
      };

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
