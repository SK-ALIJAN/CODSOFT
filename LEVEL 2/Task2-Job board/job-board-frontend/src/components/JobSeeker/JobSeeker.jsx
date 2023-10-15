import React from "react";
import styled from "styled-components";
import JobSeekerAuth from "./jobseekerAuth";
import { useSelector } from "react-redux";

const JobSeeker = () => {
  let isAuth = useSelector((store) => {
    return store.jobSeekerSignINReducer.isAuth;
  });

  return (
    <>
      {!isAuth ? (
        <JobSeekerAuth />
      ) : (
        <JobSeekerPageContainer>
          <PageHeader>
            <PageTitle>Find Jobs</PageTitle>
          </PageHeader>

          <SearchBar>
            <SearchInput
              type="text"
              placeholder="Search by skill (e.g., React, Node.js)"
            />
            <SearchButton>Search</SearchButton>
          </SearchBar>

          <JobList>
            <JobItem>
              <JobDetails>
                <JobTitle>Front-end Developer</JobTitle>
                <JobDescription>
                  React and HTML/CSS skills required
                </JobDescription>
              </JobDetails>
              <ApplyButton>Apply</ApplyButton>
            </JobItem>
            <JobItem>
              <JobDetails>
                <JobTitle>Node.js Developer</JobTitle>
                <JobDescription>
                  Experience with Node.js and MongoDB
                </JobDescription>
              </JobDetails>
              <ApplyButton>Apply</ApplyButton>
            </JobItem>
            <JobItem>
              <JobDetails>
                <JobTitle>Full-stack Developer</JobTitle>
                <JobDescription>
                  React, Node.js, and database skills required
                </JobDescription>
              </JobDetails>
              <ApplyButton>Apply</ApplyButton>
            </JobItem>
          </JobList>
        </JobSeekerPageContainer>
      )}
    </>
  );
};

export default JobSeeker;

const JobSeekerPageContainer = styled.div`
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const PageHeader = styled.header`
  text-align: center;
  margin: 20px 0;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const JobList = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const JobItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobTitle = styled.h2`
  font-size: 20px;
`;

const JobDescription = styled.p`
  font-size: 16px;
`;

const ApplyButton = styled.button`
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
