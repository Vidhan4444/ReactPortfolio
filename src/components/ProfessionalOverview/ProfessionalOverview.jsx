import "./ProfessionalOverview.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const ProfessionalOverview = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className={`professional-overview reveal ${isVisible ? "active" : ""
      }`} id="overview">
      <h2 className="overview-title">Professional Overview</h2>

      <div className="overview-content">
        <p>
          I’m an <strong>entry-level Full Stack Developer</strong> with hands-on
          experience in building web applications using{" "}
          <strong>React</strong>, <strong>Node.js</strong>, and{" "}
          <strong>MongoDB</strong>.
        </p>

        <p>
          I enjoy working on real-world problems — from structuring clean,
          reusable frontend components to handling backend logic and API
          integrations.
        </p>

        <p>
          I’ve participated in multiple hackathons, contributing mainly to{" "}
          <strong>backend and logic development</strong>, including integrating
          third-party APIs and AI models, which helped me strengthen my system
          thinking and collaboration skills.
        </p>

        <p>
          Currently, I’m focused on <strong>improving my problem-solving
            abilities</strong>, backend design practices, and writing cleaner,
          more maintainable React applications as I prepare for industry-ready
          roles.
        </p>
      </div>
    </section>
  );
};

export default ProfessionalOverview;
