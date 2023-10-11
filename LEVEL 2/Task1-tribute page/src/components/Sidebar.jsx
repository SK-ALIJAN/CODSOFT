import React, { useState } from "react";
import Hamburger from "hamburger-react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <WRAPPER id="sidebar">
      <div id="humburger-icon">
        <Hamburger onToggle={(toggled) => !toggled} />
      </div>

      <div id="main-wrapp">
        <h1>TimeLine</h1>

        <div className="achievement">
          <h3>1971</h3>
          <p>
            Elon Musk is born in South Africa to an engineer father and a model
            mother.
          </p>
        </div>

        <div className="achievement">
          <h3>1983</h3>
          <p>Writes first video game called Blastar; sells for $500.</p>
        </div>

        <div className="achievement">
          <h3>1995-1991</h3>
          <p>
            Attends college at Queen’s University in Kingston, Ontario. Then
            transfers to the University of Pennsylvania; completed a BS in
            Economics (Wharton) and a BA with a major in physics
          </p>
        </div>

        <div className="achievement">
          <h3>1999</h3>
          <p>
            Sells Zip2 to Compaq, the personal computer company, for $307
            million, of which $22 million went to Musk. Then forms X.com, which
            in 2000 morphs into PayPal
          </p>
        </div>

        <div className="achievement">
          <h3>July 2002</h3>
          <p>
            eBay acquires PayPal for $1.5 billion in stock, of which $165
            million goes to Musk
          </p>
        </div>

        <div className="achievement">
          <h3>May 2002</h3>
          <p>
            Founds SpaceX to design, manufacture and launche advanced rockets
            and spacecraft.
          </p>
        </div>

        <div className="achievement">
          <h3>2004</h3>
          <p>Invests several millions into Tesla Motors</p>
        </div>

        <div className="achievement">
          <h3>2007</h3>
          <p>
            SpaceX wins $1.6 billion contract to bring cargo to the
            International Space Station
          </p>
        </div>

        <div className="achievement">
          <h3>May 2002</h3>
          <p>
            Founds SpaceX to design, manufacture and launche advanced rockets
            and spacecraft.
          </p>
        </div>

        <div className="achievement">
          <h3>October 2008</h3>
          <p>Becomes Tesla’s CEO</p>
        </div>

        <div className="achievement">
          <h3>June 29, 2010</h3>
          <p>Tesla IPO</p>
        </div>

        <div className="achievement">
          <h3>May 30, 2020</h3>
          <p>
            SpaceX successfully launches 2 astronauts into space on the Crew
            Dragon in order to dock with the ISS.
          </p>
        </div>
      </div>
    </WRAPPER>
  );
};

export default Sidebar;

const WRAPPER = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding: 10px;
  color: #526272;

  #humburger-icon {
    position: fixed;
    top: 0px;
  }
  #main-wrapp {
    margin: 10px;
    margin-top: 70px;
  }
  .achievement {
    border-left: 7px solid #526272;
    padding-left: 1rem;
    position: relative;
    z-index: -1;
    h3,
    p {
      position: relative;
      bottom: 10px;
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 10px;
    }
  }
  .achievement::before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    /* background-color: ; */
    position: absolute;
    top: 100.7%;
    left: -14px;
    outline: 5px solid #526272;
  }
`;
