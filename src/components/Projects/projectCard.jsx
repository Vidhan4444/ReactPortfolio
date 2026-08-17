import useScrollReveal from '../../hooks/useScrollReveal';

const ProjectCard = ({ project, onOpen }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`project-card reveal-left ${isVisible ? "active" : ""}`}
      onClick={onOpen}
      style={{ cursor: "pointer" }}
    >
      <div className='project-image'>
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.shortDesc}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        
        <button className="btn btn-outline" onClick={onOpen}>
          Learn More <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
