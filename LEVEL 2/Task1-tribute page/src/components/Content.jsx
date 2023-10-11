import React from "react";
import styled from "styled-components";
import Elon from "../Asset/elon_mask.webp";

const Content = () => {
  return (
    <DIV id="contentContainer">
      <div className="image">
        <img src={Elon} alt="Elon mask" />
        <p>Elon @ SpaceX</p>
      </div>

      <div className="details">
        <h2>Elon Musk</h2>
        <p>
          Elon Musk is a South African-born American entrepreneur and
          businessman who founded X.com in 1999 (which later became PayPal),
          SpaceX in 2002 and Tesla Motors in 2003. Musk became a
          multimillionaire in his late 20s when he sold his start-up company,
          Zip2, to a division of Compaq Computers. He has an estimated net-worth
          of around 59.2 billion dollars and is listed as the 16th richest
          person in the world according to Forbes. His ultimate goal is to make
          life multiplanentary and help humanity explore beyond Earth.
        </p>

        <a href="https://en.wikipedia.org/wiki/Elon_Musk"> READ MORE</a>
      </div>
    </DIV>
  );
};

export default Content;

let DIV = styled.div`
  background-color: #00203f;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  .image {
    text-align: center;
    width: 40%;
    img {
      width: 16rem;
      border-radius: 100%;
      border: 5px solid white;
    }
  }

  .details {
    width: 50%;

    a {
      text-decoration: none;
      background-color: #e74c3c;
      color: white;
      padding: 10px 40px;
      border-radius: 4px;
    }
  }
`;
