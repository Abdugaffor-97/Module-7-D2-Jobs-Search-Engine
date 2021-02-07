import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "../reducers/user";
import compareReducer from "../reducers/compare";
import jobsReducer from "../reducers/jobs";
import thunk from "redux-thunk";
import initialState from "./initialState.json";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user: userReducer,
  compare: compareReducer,
  jobs: jobsReducer,
});

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
