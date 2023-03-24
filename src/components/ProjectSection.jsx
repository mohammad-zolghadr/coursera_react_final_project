import React from "react";

// Images
import todoImage from "../images/project_proTodo.png";
import mozoBlogImage from "../images/project_mozoBlog.png";
import adminPanelImage from "../images/project_adminPanel.png";

const ProjectSection = () => {
  const projectsData = [
    {
      id: 1,
      name: "Todo List",
      image: todoImage,
      desc: "A Proffesional Todolist that developed by React.js & Redux",
      link: "https://github.com/mohammad-zolghadr/Pro-Todo",
    },
    {
      id: 2,
      name: "Mozo Blog",
      image: mozoBlogImage,
      desc: "A Weblog Project that has backend with Google Firebase",
      link: "https://github.com/mohammad-zolghadr/mozo.blog",
    },
    {
      id: 3,
      name: "Admin Panel",
      image: adminPanelImage,
      desc: "My Admin Panel that developed by Ract.js & Tailwind Css and Redux",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
  ];

  return (
    <div className="projectsContainer">
      <h3 id="projects">Featured Project</h3>
      <div>
        {projectsData.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <button className="simpleHover">
                  <a href={item.link} target="_blank">
                    See Demo
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
