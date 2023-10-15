import {
  recruiterAllJobsError,
  recruiterAllJobsRequest,
  recruiterAllJobsSuccess,
  recruiterJobPostError,
  recruiterJobPostRequest,
  recruiterJobPostSuccess,
} from "../actionType";

let initialValue = {
  isloading: false,
  data: [],
  isError: false,
  Errormessage: "",
};

let recruiterAllJobsReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case recruiterAllJobsRequest:
      return { ...state, isloading: true };
    case recruiterAllJobsSuccess:
      return {
        ...state,
        isloading: false,
        data: payload,
        isError: false,
        Errormessage: "",
      };

    case recruiterAllJobsError:
      return {
        ...state,
        isloading: false,
        isError: true,
        Errormessage: payload,
      };
    default:
      return state;
  }
};

let initialValueJobPost = {
  isloading: false,
  data: [],
  isError: false,
  Errormessage: "",
};

let recruiterJobPostReducer = (
  state = initialValueJobPost,
  { type, payload }
) => {
  switch (type) {
    case recruiterJobPostRequest:
      return { ...state, isloading: true };
    case recruiterJobPostSuccess:
      return {
        ...state,
        isloading: false,
        data: payload,
        isError: false,
        Errormessage: "",
      };

    case recruiterJobPostError:
      return {
        ...state,
        isloading: false,
        isError: true,
        Errormessage: payload,
      };
    default:
      return state;
  }
};

export { recruiterAllJobsReducer, recruiterJobPostReducer };
