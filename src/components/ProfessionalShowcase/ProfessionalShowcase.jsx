import { useState } from "react";
import "./ProfessionalShowcase.css";

import Skills from "./Skills";
import Learning from "./Learning";
import Strengths from "./Strengths";
import useScrollReveal from '../../hooks/useScrollReveal.js';

const ProfessionalShowcase = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const { ref, isVisible } = useScrollReveal()
  return (
    <section ref={ref} className={`professional reveal ${isVisible ? "active" : ""}`}>
      <h2 className="professional-title">Professional Focus</h2>

      {/* TAB NAV */}
      <div className="professional-tabs">
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>

        <button
          className={activeTab === "learning" ? "active" : ""}
          onClick={() => setActiveTab("learning")}
        >
          Learning
        </button>

        <button
          className={activeTab === "strengths" ? "active" : ""}
          onClick={() => setActiveTab("strengths")}
        >
          Strengths
        </button>
      </div>

      {/* CONTENT */}
      <div className="professional-content">
        {activeTab === "skills" && <Skills />}
        {activeTab === "learning" && <Learning />}
        {activeTab === "strengths" && <Strengths />}
      </div>
    </section>
  );
};

export default ProfessionalShowcase;
