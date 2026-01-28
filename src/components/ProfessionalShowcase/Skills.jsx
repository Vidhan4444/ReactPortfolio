import { useState, useEffect } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

const skillsData = [
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Node.js", level: 60 },
  { name: "MongoDB", level: 55 },
  { name: "Git & GitHub", level: 65 },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setAnimate(true);
    }, 50)
    return () => cancelAnimationFrame(raf)
  }, []);
  return (
    <div ref={ref} className={`skills reveal-left ${isVisible ? "active" : ""}`}>
      {skillsData.map((skill) => (
        <div key={skill.name} className="skill">
          <div className="skill-header">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
