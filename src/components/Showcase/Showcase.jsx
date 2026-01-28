import { useState } from "react";
import "./Showcase.css";
import useScrollReveal from "../../hooks/useScrollReveal";
import Projects from "../Projects/Projects";

import Participations from "../Participations/Participations";
import Certifications from "../Certificates/Certifications";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`showcase reveal ${isVisible ? "active" : ""}`}>
      {/* TAB NAV */}
      <div className="showcase-nav">
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>

        <button
          className={activeTab === "certifications" ? "active" : ""}
          onClick={() => setActiveTab("certifications")}
        >
          Certifications
        </button>

        <button
          className={activeTab === "participations" ? "active" : ""}
          onClick={() => setActiveTab("participations")}
        >
          Participations
        </button>
      </div>

      {/* CONTENT */}
      <div className="showcase-content">
        {activeTab === "projects" && <Projects />}
        {activeTab === "certifications" && <Certifications />}
        {activeTab === "participations" && <Participations />}
      </div>
    </section>
  );
};

export default Showcase;
