import { useState } from "react";
import certificationsData from "../../data/certificationsData";
import CertificationCard from "./CertificationCard";
import "./Certifications.css";

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="certifications">
      <h2 className="certifications-title">Certifications</h2>

      <div className="certifications-grid">
        {certificationsData.map((cert) => (
          <CertificationCard
            key={cert.id}
            cert={cert}
            onOpen={() => setActiveCert(cert)}
          />
        ))}
      </div>

      {activeCert && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <button
              className="modal-close"
              onClick={() => setActiveCert(null)}
            >
              ✕
            </button>

            <h2>{activeCert.title}</h2>
            <p><strong>Issuer:</strong> {activeCert.issuer}</p>
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="cert-modal-image"
            />
            <p>{activeCert.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;

