const store = (state = {}, action) => {
  switch (action.type) {
    case "ADD_JOB_TO_FAVOURITE":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default store;
