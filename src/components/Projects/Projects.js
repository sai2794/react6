import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { id: 1, title: 'Smart Lock System', description: 'A smart lock system is an advanced electronic locking mechanism that leverages technology to provide secure and convenient access control to homes, businesses, and various facilities. It replaces traditional key-and-lock systems with digital alternatives, offering a wide range of features and benefits.'},
  { id: 2, title: 'Plant disease identification using deep learning', description: 'Plant disease identification using deep learning is an innovative and highly effective approach for monitoring, diagnosing, and managing diseases and disorders that affect plants. This technology leverages the power of deep learning, a subset of artificial intelligence, to detect and classify plant diseases based on images and data.' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I have worked with..</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
  );
};
export default Projects;