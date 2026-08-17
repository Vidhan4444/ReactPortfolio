import Modal from "../common/Modal";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const liveUrl = project.liveLink || project.LiveLink;

  return (
    <Modal isOpen={Boolean(project)} onClose={onClose} title={project.title} maxWidth="640px">
      <div className="project-modal-body">
        <p className="project-modal-desc">{project.description}</p>

        {project.tech?.length > 0 && (
          <div className="project-modal-tech">
            <strong>Technologies Used:</strong>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        )}

        {project.learnings?.length > 0 && (
          <div className="project-modal-learnings">
            <strong>Key Learnings & Architecture Details:</strong>
            <ul>
              {project.learnings.map((item, index) => (
                <li key={index}>
                  <i className="bx bx-check"></i> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="modal-links">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bx bx-link-external"></i> Live Application
            </a>
          )}

          {project.githubFrontend && (
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="bx bxl-github"></i> Frontend Repository
            </a>
          )}

          {project.githubBackend && project.githubBackend !== project.githubFrontend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="bx bxl-github"></i> Backend Repository
            </a>
          )}

          {project.backendAPI && (
            <a
              href={project.backendAPI}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="bx bx-server"></i> API Endpoint
            </a>
          )}

          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="bx bx-play-circle"></i> Watch Video Demo
            </a>
          )}

          {project.linkedin && (
            <a
              href={project.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="bx bxl-linkedin"></i> LinkedIn Post
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
