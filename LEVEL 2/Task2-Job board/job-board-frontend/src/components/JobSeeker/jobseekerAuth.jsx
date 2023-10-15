import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { jobseekerlogin, jobseekersignup } from "../../Redux/action";

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const AuthForm = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AuthTitle = styled.h2`
  font-size: 24px;
`;

const AuthInput = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  margin: 10px 0;
`;

const AuthButton = styled.button`
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 5px;
`;

const AuthLink = styled.span`
  margin-top: 10px;
  cursor: pointer;
  color: #333;
  font-size: 16px;
`;

const JobSeekerAuth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector((store) => {
    return store.jobSeekerSignupReducer.data;
  });

  const handleAuth = () => {
    if (isSignUp) {
      let data = {
        name,
        email,
        password,
      };

      if (data.name && data.email && data.password) {
        dispatch(jobseekersignup(data));
        setIsSignUp(false);
      } else alert("please fill all the input!");
    } else {
      let data = { email, password };

      if (data.email && data.password) {
        dispatch(jobseekerlogin(data));
      } else alert("please fill all the input!");
    }
  };

  return (
    <AuthContainer>
      <AuthForm>
        <AuthTitle>{isSignUp ? "Sign Up" : "Sign In"}</AuthTitle>
        {isSignUp ? (
          <AuthInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          ""
        )}
        <AuthInput
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <AuthButton onClick={handleAuth}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </AuthButton>
        <AuthLink onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </AuthLink>
      </AuthForm>
    </AuthContainer>
  );
};

export default JobSeekerAuth;
