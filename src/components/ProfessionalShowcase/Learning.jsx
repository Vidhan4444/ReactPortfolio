import useScrollReveal from "../../hooks/useScrollReveal";

const Learning = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`learning reveal-left ${isVisible ? "active" : ""}`}>
      <ul>
        <li><i className="bx bx-book-open"></i> Advanced React patterns and hooks</li>
        <li><i className="bx bx-book-open"></i> Backend authentication basics</li>
        <li><i className="bx bx-book-open"></i> Improving data structures and algorithms</li>
        <li><i className="bx bx-book-open"></i> Deployment and production debugging</li>
      </ul>
    </div>
  );
};

export default Learning;