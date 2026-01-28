import useScrollReveal from "../../hooks/useScrollReveal";

const ParticipationCard = ({ data, onOpen }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`participation-card reveal-left ${isVisible ? "active" : ""}`} onClick={onOpen}>
      <h3>{data.event}</h3>
      <p className="participation-type">{data.type}</p>
      <p className="participation-org">{data.organizer}</p>
      <p className="participation-problem">
        <strong>Problem:</strong> {data.problemStatement}
      </p>

    </div>
  );
};

export default ParticipationCard;
