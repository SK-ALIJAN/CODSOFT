import React from "react";
import styled from "styled-components";
import { FaUser, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LandingPageContainer = styled.div`
  background-color: #fff;
  color: #333;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin: 40px 0;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CandidateButton = styled.button`
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const RecruiterButton = styled.button`
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ButtonText = styled.span`
  margin-left: 10px;
`;

const Features = styled.section`
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const GetAppSection = styled.section`
  background-color: #fff;
  color: #333;
  padding: 20px;
  text-align: center;
`;

const GetAppTitle = styled.h2`
  font-size: 28px;
`;

const GetAppDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const MobileNumberInput = styled.input`
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const GetAppButton = styled.button`
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TrendingCategories = styled.section`
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CategoryTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryItem = styled.li`
  font-size: 18px;
  padding: 5px 15px;
  background-color: #ff6600;
  color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Testimonials = styled.section`
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const TestimonialTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TestimonialList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const TestimonialItem = styled.li`
  flex-basis: calc(33.33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.p`
  font-size: 18px;
`;

const TestimonialDescription = styled.p`
  font-size: 16px;
`;
const FeatureHeading = styled.h2`
  font-size: 24px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
`;

const Home = () => {
  let navigate = useNavigate();

  return (
    <LandingPageContainer>
      <Header>
        <Title>
          Direct Hiring App for Founders, Team Leaders, and Hiring Managers
        </Title>
        <Subtitle>
          Job Board simplifies the hiring process. Directly chatting with
          verified candidates matched by the AI algorithm ensures a simple,
          quick, and effective hiring experience.
        </Subtitle>
      </Header>

      <ButtonsContainer>
        <CandidateButton>
          <FaUser size={20} />
          <ButtonText
            onClick={() => {
              navigate("/jobseeker");
            }}
          >
            Candidate
          </ButtonText>
        </CandidateButton>
        <RecruiterButton>
          <FaUserTie size={20} />
          <ButtonText
            onClick={() => {
              navigate("/recruiter");
            }}
          >
            Recruiter
          </ButtonText>
        </RecruiterButton>
      </ButtonsContainer>

      <Features>
        <FeatureHeading>Candidate's Skillset</FeatureHeading>
        <FeatureDescription>Hiring Location</FeatureDescription>
        <FeatureDescription>190K+ Verified Recruiters</FeatureDescription>
        <FeatureDescription>500K+ Jobs Posted</FeatureDescription>
        <FeatureDescription>25M+ Chat Conversations</FeatureDescription>
        <FeatureDescription>3.8M+ Job Seekers</FeatureDescription>
      </Features>

      <GetAppSection>
        <GetAppTitle>Get the Job Board App</GetAppTitle>
        <GetAppDescription>
          We will send you a link via SMS. To download the app, simply open it.
        </GetAppDescription>
        <MobileNumberInput type="text" placeholder="Enter Mobile Number" />
        <GetAppButton>Get App</GetAppButton>
      </GetAppSection>

      <TrendingCategories>
        <CategoryTitle>Trending Job Categories</CategoryTitle>
        <CategoryList>
          <CategoryItem>IT Engineering</CategoryItem>
          <CategoryItem>Operations</CategoryItem>
          <CategoryItem>BPO & KPO</CategoryItem>
          <CategoryItem>Sales & BD</CategoryItem>
          <CategoryItem>Finance</CategoryItem>
          <CategoryItem>Marketing</CategoryItem>
          <CategoryItem>Personnel</CategoryItem>
        </CategoryList>
      </TrendingCategories>

      <Testimonials>
        <TestimonialTitle>What Influencers Say</TestimonialTitle>
        <TestimonialList>
          <TestimonialItem>
            <TestimonialAuthor>Dhruv Rathee</TestimonialAuthor>
          </TestimonialItem>
          <TestimonialItem>
            <TestimonialAuthor>Ankur Warikoo</TestimonialAuthor>
          </TestimonialItem>
          <TestimonialItem>
            <TestimonialAuthor>Gaurav Taneja</TestimonialAuthor>
          </TestimonialItem>
          <TestimonialItem>
            <TestimonialAuthor>Kenny Sebastian</TestimonialAuthor>
          </TestimonialItem>
          <TestimonialItem>
            <TestimonialAuthor>Ranveer Allhabadia</TestimonialAuthor>
          </TestimonialItem>
          <TestimonialItem>
            <TestimonialAuthor>Mithila Palkar</TestimonialAuthor>
          </TestimonialItem>
          <TestimonialItem>
            <TestimonialAuthor>Dhruv Rathee</TestimonialAuthor>
          </TestimonialItem>
        </TestimonialList>
      </Testimonials>
    </LandingPageContainer>
  );
};

export default Home;
