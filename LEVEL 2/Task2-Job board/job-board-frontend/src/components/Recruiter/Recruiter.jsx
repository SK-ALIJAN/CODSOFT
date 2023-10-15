import React from "react";
import RecruiterAuth from "./RecruiterAuth";
import { useSelector } from "react-redux";
import RecruiterDashboard from "./RecruiterDashboard"

const Recruiter = () => {
  // let isAuth = useSelector((store) => {
  //   return store.SignINReducer.isAuth;
  // });

  return (
    <>
      {/* <RecruiterAuth /> */}
      <RecruiterDashboard />
    </>
  );
};

export default Recruiter;
