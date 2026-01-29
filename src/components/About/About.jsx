import './About.css';
import AboutImage from '../../assets/images/BackgroundImage.png';
import cv from '../../assets/cv/Sumeet_Salunke_CV.pdf';
import useScrollReveal from '../../hooks/useScrollReveal';
const About = () => {
  const { ref, isVisible } = useScrollReveal();
  return <>
    <section ref={ref} className={`about reveal ${isVisible ? "active" : ""}`} id="about">
      <h2 className="about-title">About me</h2>
      <div className="about-container">
        <div className="about-img">
          <img src={AboutImage} alt="sumeet" />
        </div>
        <div className="about-content">
          <h3>Hi,I'm Sumeet Salunke</h3>
          <p>
            I'm a full satck developer with beginner level experience in web
            designing and development.I love to create beautiful and functional
            websites that provide an excellent user experience.I', passionate
            about coding and always eager to learn new technologies and improve
            my skills.Besides ,i have knowledge in Java,C,Data structures and
            algorithms.
            <br /><br />
            My goal is to become a skilled full stack developer capable of
            building scalable, user-friendly web applications that make a
            real-world impact
          </p>
          <div className="about-btn">
            <a href={cv} target='_blank' rel='noopener noreferrer' download className="cv-btn">Download CV</a>
          </div>
        </div>
      </div>
    </section></>
}
export default About;