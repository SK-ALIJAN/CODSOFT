import React from "react";
import styled from "styled-components";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
  }
`;

const ChangeRegion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
  font-size: 24px;
`;

const Links = styled.div`
  margin-top: 20px;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h3>Chat Directly. Hire Instantly.</h3>
        <p>
          Trusted by 3.8M+ verified job seekers and 190K+ verified recruiters.
        </p>

        <ContactInfo>
          <a
            href="https://wa.me/918695453740"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> +918695453740
          </a>
        </ContactInfo>

        <Links>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/recruiters">Recruiters</a>
          <a href="/jobseekers">Job Seekers</a>
          <a href="/enterprise">Enterprise Hiring</a>
        </Links>

        <Links>
          <a href="/media">Media</a>
          <a href="/influencers">Influencers</a>
          <a href="/blog">Blog</a>
          <a href="/startup">For Startup Hiring</a>
          <a href="/contact">Contact Us</a>
        </Links>
      </FooterContent>

      <SocialIcons>
        <a href="/twitter">
          <FaTwitter />
        </a>
        <a href="/linkedin">
          <FaLinkedin />
        </a>
        <a href="/facebook">
          <FaFacebook />
        </a>
        <a href="/youtube">
          <FaYoutube />
        </a>
        <a href="/instagram">
          <FaInstagram />
        </a>
      </SocialIcons>

      <ChangeRegion>
        <FaGlobe /> Change Region
      </ChangeRegion>
    </FooterContainer>
  );
};

export default Footer;
