import C from "./constants";

export const setSelectedJob = (job) => ({
  type: C.UPDATE_SELECTED_JOB,
  payload: job,
});

export const addToFavourite = (job) => ({
  type: C.ADD_TO_COMPARE,
  payload: job,
});

export const removeFromFavourite = (id) => ({
  type: C.REMOVE_FROM_COMPARE,
  payload: id,
});
