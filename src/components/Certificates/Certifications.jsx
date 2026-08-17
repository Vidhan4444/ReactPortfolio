import { useState } from "react";
import certificationsData from "../../data/certificationsData";
import CertificationCard from "./CertificationCard";
import Modal from "../common/Modal";
import "./Certifications.css";

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="certifications">
      <h2 className="certifications-title">My <span className="gradient-text">Certifications</span></h2>

      <div className="certifications-grid">
        {certificationsData.map((cert) => (
          <CertificationCard
            key={cert.id}
            cert={cert}
            onOpen={() => setActiveCert(cert)}
          />
        ))}
      </div>

      <Modal
        isOpen={Boolean(activeCert)}
        onClose={() => setActiveCert(null)}
        title={activeCert?.title}
        maxWidth="560px"
      >
        {activeCert && (
          <div className="cert-modal-body">
            <p className="cert-issuer-badge">
              <strong>Issuer:</strong> {activeCert.issuer}
            </p>
            <div className="cert-modal-img-container">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="cert-modal-image"
              />
            </div>
            <p className="cert-desc">{activeCert.description}</p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certifications;

