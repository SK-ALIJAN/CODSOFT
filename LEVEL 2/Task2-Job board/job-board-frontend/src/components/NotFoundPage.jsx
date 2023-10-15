import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ffac81, #ff928b);
`;

const NotFoundContent = styled.div`
  text-align: center;
  color: #fff;
`;

const NotFoundTitle = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
`;

const HomeButton = styled.a`
  background-color: #fff;
  color: #ff928b;
  font-size: 1.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>
          Oops, the page you're looking for does not exist.
        </NotFoundText>
        <HomeButton href="/">Go back to Home</HomeButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
