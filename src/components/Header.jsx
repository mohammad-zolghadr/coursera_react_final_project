import React from "react";

// style

// icons
import githubIco from "../images/gb_ico.png";
import gmailIco from "../images/gm_ico.png";
import linkedinIco from "../images/li_ico.png";

const socials = [
  {
    icon: gmailIco,
    url: "mailto: mohammad.zol9978@gmail.com",
  },
  {
    icon: githubIco,
    url: "https://github.com/mohammad-zolghadr",
  },
  {
    icon: linkedinIco,
    url: "https://www.linkedin.com/in/mohammad-zolghadr",
  },
];

const Header = () => {
  return (
    <ul className="socialIconContainer">
      <li>
        <a className="simpleHover" href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a className="simpleHover" href="#contactMe">
          Contact Me
        </a>
      </li>
      {socials.map((item) => (
        <li key={item.url}>
          <a className="simpleHover" href={item.url} target="_blank">
            <img className="socialIcon" src={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Header;
