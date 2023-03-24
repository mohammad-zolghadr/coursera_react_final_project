import React from "react";

// icons
import githubIco from "../images/gb_ico.png";
import gmailIco from "../images/gm_ico.png";
import linkedinIco from "../images/li_ico.png";
import insagramIco from "../images/in_ico.png";
import whatsAppIco from "../images/wa_ico.png";

const ContactMeSection = () => {
  const socials = [
    {
      name: "WhatsApp",
      icon: whatsAppIco,
      url: "https://wa.me/+989164538713",
    },
    {
      name: "Gmail",
      icon: gmailIco,
      url: "mailto: mohammad.zol9978@gmail.com",
    },
    {
      name: "Github",
      icon: githubIco,
      url: "https://github.com/mohammad-zolghadr",
    },
    {
      name: "Linkedin",
      icon: linkedinIco,
      url: "https://www.linkedin.com/in/mohammad-zolghadr",
    },
    {
      name: "Instagram",
      icon: insagramIco,
      url: "https://www.instagram.com/mozo.plus",
    },
  ];

  return (
    <div className="contactMeContainer">
      <h3 id="contactMe">Contact Me</h3>
      <div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email Address" />
          </div>
          <div>
            <label>Your Message</label>
            <textarea></textarea>
            <button type="submit" className="simpleHover">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="contactMeSocial">
        {socials.map((item) => {
          return (
            <div key={item.name} className="simpleHover">
              <a href={item.url} target="_blank">
                <img src={item.icon} />
                <span>{item.name}</span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactMeSection;
