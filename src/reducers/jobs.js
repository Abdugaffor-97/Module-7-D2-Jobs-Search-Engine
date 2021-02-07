import C from "./constants";

const jobs = (state = {}, action) => {
  switch (action.type) {
    case C.UPDATE_JOB_LIST:
      return {
        ...state,
        joblist: action.payload,
      };

    case C.SET_JOB_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default jobs;
