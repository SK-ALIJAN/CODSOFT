import React, { useState } from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const DashboardForm = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const DashboardTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
`;

const Label = styled.label`
  font-size: 18px;
  margin: 5px;
  text-align: left;
`;

const DashboardInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  text-align: left;
`;

const DashboardTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
  width: 100%;
  text-align: left;
`;

const DashboardButton = styled.button`
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;

const RecruiterDashboard = () => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [deadline, setDeadline] = useState("");
  const [experience, setExperience] = useState("");
  const [opening, setOpening] = useState(1);
  const [aboutCompany, setAboutCompany] = useState("");
  const [logo, setLogo] = useState("");
  const [skills, setSkills] = useState("");

  const handleJobPost = (e) => {
    e.preventDefault();
  };
  return (
    <DashboardContainer>
      <DashboardForm onSubmit={handleJobPost}>
        <DashboardTitle>Post a Job</DashboardTitle>

        <FormGroup>
          <FormGroup>
            <Label>Role</Label>
            <DashboardInput
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Company</Label>
            <DashboardInput
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <FormGroup>
            <Label>Location</Label>
            <DashboardInput
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Notice Period</Label>
            <DashboardInput
              type="text"
              placeholder="Notice Period"
              value={noticePeriod}
              onChange={(e) => setNoticePeriod(e.target.value)}
            />
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <FormGroup>
            <Label>Deadline</Label>
            <DashboardInput
              type="text"
              placeholder="Deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Experience</Label>
            <DashboardInput
              type="text"
              placeholder="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <FormGroup>
            <Label>Number of Openings</Label>
            <DashboardInput
              type="number"
              placeholder="Number of Openings"
              value={opening}
              onChange={(e) => setOpening(parseInt(e.target.value))}
            />
          </FormGroup>
          <FormGroup>
            <Label>Logo URL</Label>
            <DashboardInput
              type="text"
              placeholder="Logo URL"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label>About Company</Label>
          <DashboardTextArea
            placeholder="About Company"
            value={aboutCompany}
            onChange={(e) => setAboutCompany(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Skills (comma-separated)</Label>
          <DashboardInput
            type="text"
            placeholder="Skills (comma-separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </FormGroup>
        <DashboardButton type="submit">Post Job</DashboardButton>
      </DashboardForm>
    </DashboardContainer>
  );
};

export default RecruiterDashboard;
