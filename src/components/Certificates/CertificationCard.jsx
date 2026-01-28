import useScrollReveal from "../../hooks/useScrollReveal";

const CertificationCard = ({ cert, onOpen }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div className={`cert-card reveal-left ${isVisible ? "active" : ""}`} ref={ref} onClick={onOpen}>
      <div className="cert-image">
        <img src={cert.image} alt={cert.title} />
      </div>

      <h3>{cert.title}</h3>
      <p className="cert-issuer">{cert.issuer}</p>
    </div>
  );
};

export default CertificationCard;
