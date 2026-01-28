import useScrollReveal from "../../hooks/useScrollReveal";

const Learning = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`learning reveal-left ${isVisible ? "active" : ""}`}>
      <ul>
        <li>Advanced React patterns and hooks</li>
        <li>Backend authentication basics</li>
        <li>Improving data structure and alogroithms</li>
        <li>deployment and production debugging</li>
      </ul>
    </div>
  );
};

export default Learning;