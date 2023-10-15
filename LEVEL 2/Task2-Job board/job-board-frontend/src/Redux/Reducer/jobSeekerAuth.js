import {
  jobSeekerLoginError,
  jobSeekerLoginRequest,
  jobSeekerLoginSuccess,
  jobSeekerSignupError,
  jobSeekerSignupRequest,
  jobSeekerSignupSuccess,
} from "../actionType";

let InitialSignupValue = {
  isLoading: false,
  data: {},
  isError: false,
  ErrorMessage: "",
};

let jobSeekerSignupReducer = (
  state = InitialSignupValue,
  { type, payload }
) => {
  switch (type) {
    case jobSeekerSignupRequest:
      return { ...state, isLoading: true };

    case jobSeekerSignupSuccess:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
        ErrorMessage: "",
      };

    case jobSeekerSignupError:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        ErrorMessage: payload,
      };
    default:
      return state;
  }
};

let InitialSignINValue = {
  isLoading: false,
  isAuth: false,
  data: {},
  isError: false,
  ErrorMessage: "",
};

let jobSeekerSignINReducer = (
  state = InitialSignINValue,
  { type, payload }
) => {
  switch (type) {
    case jobSeekerLoginRequest:
      return { ...state, isLoading: true };

    case jobSeekerLoginSuccess:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        data: payload,
        isError: false,
        ErrorMessage: "",
      };

    case jobSeekerLoginError:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        ErrorMessage: payload,
      };
    default:
      return state;
  }
};

export { jobSeekerSignupReducer, jobSeekerSignINReducer };
