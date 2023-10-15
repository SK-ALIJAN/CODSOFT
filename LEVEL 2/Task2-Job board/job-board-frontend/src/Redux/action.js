import axios from "axios";
import {
  jobSeekerLoginError,
  jobSeekerLoginRequest,
  jobSeekerLoginSuccess,
  jobSeekerSignupError,
  jobSeekerSignupRequest,
  jobSeekerSignupSuccess,
} from "./actionType";

let url = `https://backend-production-1eb3.up.railway.app/`;

export const jobseekersignup = (newobj) => async (dispatch) => {
  try {
    dispatch({ type: jobSeekerSignupRequest });
    // let data = await axios.post(`${url}/jobseeker/signup`, newobj);
    dispatch({ type: jobSeekerSignupSuccess, payload: newobj });
  } catch (error) {
    dispatch({ type: jobSeekerSignupError, payload: error.message });
  }
};

export const jobseekerlogin = (newobj) => async (dispatch) => {
  try {
    dispatch({ type: jobSeekerLoginRequest });
    // let data = await axios.post(`${url}/jobseeker/login`, newobj);
    dispatch({ type: jobSeekerLoginSuccess, payload: newobj });
  } catch (error) {
    dispatch({ type: jobSeekerLoginError, payload: error.message });
  }
};
