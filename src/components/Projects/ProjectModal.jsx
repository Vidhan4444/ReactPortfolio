import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>

        <h2>{project.title}</h2>

        <p><strong>Description:</strong></p>
        <p>{project.description}</p>

        <p><strong>What I learned:</strong></p>
        <ul>
          {project.learnings.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Watch Demo
          </a>
        )}
        {project.linkedin && (
          <a
            href={project.linkedin
            }
            target='_blank'
            rel='noopener noreferrer'
            className="btn">See post</a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
