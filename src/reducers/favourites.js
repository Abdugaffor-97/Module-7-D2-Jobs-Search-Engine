const favourites = (state = {}, action) => {
  switch (action.type) {
    case "ADD_JOB_TO_FAVOURITE":
      return {
        ...state,
        favourites: action.payload,
      };

    case "REMOVE_JOB_FROM_FAVOURITE":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default favourites;
