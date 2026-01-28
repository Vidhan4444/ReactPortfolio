import "./Home.css";

const Home = () => {
  return (
    <section id='home' className="home">
      <div className="home-content">
        <h1>Hi, I'm Sumeet Salunke</h1>
        <h3>Full stack developer</h3>

        <p className="home-paragraph">
          I’m a Full Stack Developer with hands-on experience in building web applications using React, Node.js, and MongoDB. I enjoy working on real-world problems, from creating clean, responsive user interfaces to handling backend logic and API integrations. Through projects and hackathons, I’ve strengthened my understanding of full-stack development and continue to improve my problem-solving and system design skills.

        </p>

        <div className="btn-box">
          <a href="#contact">Let's Talk</a>
        </div>

        {/* 🔒 SOCIAL ICONS MUST LIVE HERE */}
        <div className="home-sci">
          <a href="https://wa.me/+919742204749"><i className="bx bxl-whatsapp"></i></a>
          <a href="https://www.linkedin.com/in/sumeet-salunke-052070325"><i className="bx bxl-linkedin"></i></a>
          <a href="https://github.com/Vidhan4444"><i className="bx bxl-github"></i></a>
        </div>
      </div>

      <div className="home-img">
        <img src="/assets/images/change the backgroun.png" alt="Sumeet" />
      </div>

      <span className="home-imghover"></span>
    </section>
  );
};

export default Home;
