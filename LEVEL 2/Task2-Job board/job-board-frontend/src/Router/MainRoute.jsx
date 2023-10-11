import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import JobSeeker from "../components/JobSeeker/JobSeeker";
import Recruiter from "../components/Recruiter/Recruiter";
import NotFoundpage from "../components/NotFoundPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobseeker" element={<JobSeeker />} />
      <Route path="/recruiter" element={<Recruiter />} />
      <Route path="*" element={<NotFoundpage />} />
    </Routes>
  );
};

export default MainRoute;
