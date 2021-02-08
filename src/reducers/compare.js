import C from "./constants";

const favourites = (state = [], action) => {
  switch (action.type) {
    case C.ADD_TO_COMPARE:
      return {
        ...state,
        fav_list: state.fav_list.concat(action.payload),
      };

    case C.REMOVE_FROM_COMPARE:
      return {
        ...state,
        fav_list: action.payload,
      };

    default:
      return state;
  }
};

export default favourites;
