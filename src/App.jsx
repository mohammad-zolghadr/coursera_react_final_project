import React from "react";

import style from "./App.module.css";

// Components
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectSection";
import ContactMeSection from "./components/ContactMeSection";

const App = () => {
  return (
    <div className={style.container}>
      <Header />
      <LandingSection />
      <ProjectSection />
      <ContactMeSection />
    </div>
  );
};

export default App;
