import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import {
  jobSeekerSignupReducer,
  jobSeekerSignINReducer,
} from "./Reducer/jobSeekerAuth";
import {
  recruiterSignINReducer,
  recruiterSignupReducer,
} from "./Reducer/recruiterAuth";

import {
  recruiterJobPostReducer,
  recruiterAllJobsReducer,
} from "./Reducer/recruiterJobPost";

import { jobSeekerAllJobReducer } from "./Reducer/jobSeekerJobs";

const rootReducer = combineReducers({
  jobSeekerSignupReducer,
  jobSeekerSignINReducer,
  jobSeekerAllJobReducer,
  recruiterSignINReducer,
  recruiterSignupReducer,
  recruiterJobPostReducer,
  recruiterAllJobsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
