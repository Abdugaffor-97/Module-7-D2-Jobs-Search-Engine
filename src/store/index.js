import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "../reducers/user";
import favouritesReducer from "../reducers/favourites";
import jobsReducer from "../reducers/jobs";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const initialState = {
  user: {
    username: null,
    selectedJob: null,
  },
  jobs: {
    joblist: [],
    error: null,
  },
  favorites: {
    fav_list: [],
    error: null,
  },
};

const rootReducer = combineReducers({
  user: userReducer,
  favorites: favouritesReducer,
  jobs: jobsReducer,
});

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
