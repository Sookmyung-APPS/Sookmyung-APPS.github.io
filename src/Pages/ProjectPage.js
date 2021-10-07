import React from "react";
import Header from "../Components/Header";
import ProjectList from "../Components/ProjectList";
import Footer from "../Components/Footer";
import "../Assets/ProjectPage.css";

function ProjectPage() {
  return (
    <div>
      <Header />
      <div className="ProjectPage">
        <ProjectList />
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;
