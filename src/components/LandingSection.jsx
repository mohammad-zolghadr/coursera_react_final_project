import React from "react";

import myPic from "../images/me.png";

const LandingSection = () => {
  return (
    <div className="LandingSectionContainer">
      <img src={myPic} />
      <h2>Mohammad Zolghadr</h2>
      <p>
        Frontend Developer with <strong>React.js</strong> and{" "}
        <strong>Tailwind Css</strong>
      </p>
    </div>
  );
};

export default LandingSection;
