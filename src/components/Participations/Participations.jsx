import { useState } from "react";
import participationsData from "../../data/participationsData";
import ParticipationCard from "./ParticipationCard";
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
      <h2 className="participations-title">Participations</h2>

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
      {activeParticipation && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>

            <h2>{activeParticipation.event}</h2>

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

            <p>{activeParticipation.description}</p>

            {/* VIEW IMAGE */}
            {activeParticipation.image && (
              <div className="image-toggle-section">
                <button
                  className="btn btn-outline"
                  onClick={() => setShowImage((prev) => !prev)}
                >
                  {showImage ? "Hide image" : "View image"}
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

            {/* LEARNINGS */}
            {activeParticipation.learnings?.length > 0 && (
              <>
                <p>
                  <strong>What I Learned:</strong>
                </p>
                <ul>
                  {activeParticipation.learnings.map((learning, i) => (
                    <li key={i}>{learning}</li>
                  ))}
                </ul>
              </>
            )}

            {/* LINKEDIN POST */}
            {activeParticipation.linkedin && (
              <a
                href={activeParticipation.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                See post
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Participations;
