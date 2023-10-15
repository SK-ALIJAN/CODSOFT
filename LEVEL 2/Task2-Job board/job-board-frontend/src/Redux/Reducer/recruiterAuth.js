import {
  recruiterLoginError,
  recruiterLoginRequest,
  recruiterLoginSuccess,
  recruiterSignupError,
  recruiterSignupRequest,
  recruiterSignupSuccess,
} from "../actionType";

let InitialSignupValue = {
  isLoading: false,
  data: {},
  isError: false,
  ErrorMessage: "",
};

let recruiterSignupReducer = (
  state = InitialSignupValue,
  { type, payload }
) => {
  switch (type) {
    case recruiterSignupRequest:
      return { ...state, isLoading: true };

    case recruiterSignupSuccess:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
        ErrorMessage: "",
      };

    case recruiterSignupError:
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
  data: {},
  isError: false,
  isAuth: false,
  ErrorMessage: "",
};

let recruiterSignINReducer = (
  state = InitialSignINValue,
  { type, payload }
) => {
  switch (type) {
    case recruiterLoginRequest:
      return { ...state, isLoading: true };

    case recruiterLoginSuccess:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        data: payload,
        isError: false,
        ErrorMessage: "",
      };

    case recruiterLoginError:
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

export { recruiterSignupReducer, recruiterSignINReducer };
