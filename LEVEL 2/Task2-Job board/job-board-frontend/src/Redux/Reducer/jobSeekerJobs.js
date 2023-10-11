import {
  jobSeekerJobListError,
  jobSeekerJobListRequest,
  jobSeekerJobListSuccess,
} from "../actionType";

let initialValue = {
  isloading: false,
  data: [],
  isError: false,
  Errormessage: "",
};

let jobSeekerAllJobReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case jobSeekerJobListRequest:
      return { ...state, isloading: true };
    case jobSeekerJobListSuccess:
      return {
        ...state,
        isloading: false,
        data: payload,
        isError: false,
        Errormessage: "",
      };

    case jobSeekerJobListError:
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

export { jobSeekerAllJobReducer };
