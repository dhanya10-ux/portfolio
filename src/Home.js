import React from "react";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-card">
        <div className="profile-section">
          <img
            src="https://via.placeholder.com/180?text=Dhanya"
            alt="Jandhyala Dhanya"
            className="profile-pic"
          />
          <div>
            <h1>Jandhyala Dhanya</h1>
            <p className="subtitle">B.Tech in Computer Science Engineering</p>
            <p className="subtitle">Mahindra University, Hyderabad</p>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>About Me</h2>
        <p>
          I am a student studying B.Tech in CSE at Mahindra University, Hyderabad.
          I am interested in building practical technology solutions and continuously
          improving my knowledge in machine learning, deep learning, software development,
          and problem solving.
        </p>
      </section>

      <section className="content-card">
        <h2>Research Interests</h2>
        <p>
          My main interests are Machine Learning and Deep Learning. I am also interested
          in artificial intelligence applications, data-driven systems, and building useful
          solutions for real-world problems.
        </p>
      </section>

      <section className="content-card">
        <h2>Personal Details</h2>
        <ul className="details-list">
          <li><strong>Name:</strong> Jandhyala Dhanya</li>
          <li><strong>Phone:</strong> 9121021267</li>
          <li><strong>Personal Email:</strong> jandhyaladhanya@gmail.com</li>
          <li><strong>College Email:</strong> se23ucse194@mahindrauniversity.edu.in</li>
          <li><strong>GitHub:</strong> dhanya10-ux</li>
        </ul>
      </section>

      <section className="content-card">
        <h2>Skills</h2>
        <div className="skills-box">
          <span>C</span>
          <span>Python</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>SQL</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>PyCharm</span>
        </div>
      </section>

      <section className="content-card">
        <h2>Coursework</h2>
        <div className="skills-box">
          <span>Data Structures</span>
          <span>Algorithms</span>
          <span>Artificial Intelligence</span>
          <span>Machine Learning</span>
          <span>Compiler Design</span>
          <span>OOP</span>
          <span>Operating Systems</span>
          <span>DBMS</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
