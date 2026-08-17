import { useState } from "react";
import projectsData from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects" id='projects'>
      <h2 className="projects-title">My <span className="gradient-text">Projects</span></h2>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setActiveProject(project)}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
