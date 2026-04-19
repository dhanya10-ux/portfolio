import React from "react";

const projects = [
  {
    title: "Elder-Friendly Single-Language Video Experience",
    description:
      "Built a system to convert multilingual videos into clear Hindi or English dubbed videos for elderly viewers. Used Whisper for speech recognition, NLLB-200 for translation, MMS-TTS for speech synthesis, and FFmpeg-based processing to preserve synchronization and background audio."
  },
  {
    title: "Employee Attrition & Salary Estimation",
    description:
      "Built machine learning models to predict employee attrition and estimate salary trends. Performed data preprocessing, exploratory data analysis, feature engineering, and model evaluation using metrics such as Accuracy, F1-score, RMSE, and R²."
  },
  {
    title: "Positive vs Negative Message Spread",
    description:
      "Simulated information diffusion in networks using the Independent Cascade model. Analyzed how positive and negative messages spread across different network structures and visualized diffusion behavior and influence propagation using Python tools."
  }
];

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="page-title">My Projects</h1>
      <p className="project-note">Project links can be added later if needed.</p>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
