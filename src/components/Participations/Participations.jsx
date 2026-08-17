import { useState } from "react";
import participationsData from "../../data/participationsData";
import ParticipationCard from "./ParticipationCard";
import Modal from "../common/Modal";
import "./Participations.css";

const Participations = () => {
  const [activeParticipation, setActiveParticipation] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const closeModal = () => {
    setActiveParticipation(null);
    setShowImage(false);
  };

  return (
    <section className="participations">
      <h2 className="participations-title">Event <span className="gradient-text">Participations</span></h2>

      {/* GRID */}
      <div className="participations-grid">
        {participationsData.map((item) => (
          <ParticipationCard
            key={item.id}
            data={item}
            onOpen={() => {
              setActiveParticipation(item);
              setShowImage(false);
            }}
          />
        ))}
      </div>

      {/* MODAL */}
      <Modal
        isOpen={Boolean(activeParticipation)}
        onClose={closeModal}
        title={activeParticipation?.event}
        maxWidth="640px"
      >
        {activeParticipation && (
          <div className="participation-modal-body">
            {activeParticipation.achievement && (
              <div className="achievement-badge">
                <i className="bx bx-trophy"></i> {activeParticipation.achievement}
              </div>
            )}

            <p>
              <strong>Organizer:</strong> {activeParticipation.organizer}
            </p>

            <p>
              <strong>Type:</strong> {activeParticipation.type}
            </p>

            <p>
              <strong>Problem Statement:</strong>{" "}
              {activeParticipation.problemStatement}
            </p>

            <p>
              <strong>Role:</strong> {activeParticipation.role}
            </p>

            <p className="participation-desc">{activeParticipation.description}</p>

            {/* ROUNDS */}
            {activeParticipation.rounds?.length > 0 && (
              <div className="participation-rounds">
                <p>
                  <strong>Competition Rounds:</strong>
                </p>
                <ul>
                  {activeParticipation.rounds.map((round, i) => (
                    <li key={i}>
                      <i className="bx bx-chevron-right"></i> {round}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* LEARNINGS */}
            {activeParticipation.learnings?.length > 0 && (
              <div className="participation-learnings">
                <p>
                  <strong>What I Learned:</strong>
                </p>
                <ul>
                  {activeParticipation.learnings.map((learning, i) => (
                    <li key={i}>
                      <i className="bx bx-check"></i> {learning}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* VIEW IMAGE */}
            {activeParticipation.image && (
              <div className="image-toggle-section">
                <button
                  className="btn btn-outline"
                  onClick={() => setShowImage((prev) => !prev)}
                >
                  <i className="bx bx-image"></i> {showImage ? "Hide Certificate Image" : "View Certificate Image"}
                </button>

                {showImage && (
                  <div className="participation-image">
                    <img
                      src={activeParticipation.image}
                      alt={activeParticipation.event}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            )}

            {/* LINKEDIN POST */}
            {activeParticipation.linkedin && (
              <div className="modal-links">
                <a
                  href={activeParticipation.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="bx bxl-linkedin"></i> View LinkedIn Post
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Participations;
