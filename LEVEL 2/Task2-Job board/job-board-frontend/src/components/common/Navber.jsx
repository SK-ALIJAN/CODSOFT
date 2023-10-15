import React from "react";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <NavbarContainer>
      <Logo to="/">
        <img src={logo} alt="logo" loading="lazy" />
      </Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/jobseeker">Job Seeker</Link>
        <Link to="/recruiter">Recruiter</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navber;

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 4;
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  img {
    width: 6rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
