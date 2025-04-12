import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Artificial Pancreas',
      technologies: ['Python'],
      description: [
        'Developing a RL-based control algorithm for incorporating with an artificial pancreas device',
        'Exploring various dynamic control strategies to maximise comfort for the person wearing the device',
      ],
    },
    {
      title: 'Soft Actor Critic Variation',
      technologies: ['Python'],
      link: 'https://github.com/Shivanirudh/SAC-variant',
      description: [
        'Combines the Soft Actor Critic algorithm with safety constraints and domain knowledge.',
        'Achieved promise for a more robust algorithm by testing on the Pendulum environment',
      ],
    },
    {
      title: 'Gitgaming',
      technologies: ['Python', 'React JS'],
      links: [
        { label: 'Frontend', url: 'https://github.com/Shivanirudh/gitgaming_frontend' },
        { label: 'Backend', url: 'https://github.com/Shivanirudh/gitgaming_backend' },
      ],
      description: [
        'A web application built with Devops principles that simulates games such as Minesweeper and Flappy Bird.',
        'Uses Flask for backend, React JS for frontend and GitHub Actions for CI/CD operations.',
      ],
    },
    {
      title: 'University Finance Portal',
      technologies: ['Java Springboot', 'React JS'],
      link: 'https://github.com/Shivanirudh/University-Finance-Portal',
      description: [
        'A web application that simulates the usage of faculty logging in and perform financial transactions, built using Springboot and ReactJS',
      ],
    },
    {
      title: 'Auto Prompt Generator',
      technologies: ['Python'],
      description: [
        'Deep Learning model that generates prompts for tasks, which can be tweaked with feedback. ',
        'Uses ChatGPT as a blackbox to learn from.',
      ],
    },
    {
      title: 'Flight Delay Prediction',
      technologies: ['Python'],
      link: 'https://github.com/Shivanirudh/FlightDelayPrediction',
      description: [
        'Machine Learning project to predicts delays and amount of delay in flights, written in Python.',
        'Performs comparison amongst various classifier and regressor models for both the tasks.',
      ],
    },
    {
      title: 'Voice App Launcher',
      technologies: ['Python'],
      description: [
        'Application that works like an app launcher to launch apps in response to vocal commands.',
        'Written in Python, it converts audio to text to understand instructions.',
      ],
    },
    {
      title: 'Interpreter',
      technologies: ['C++'],
      description: [
        'Program that mimics the basic functionality of an interpreter that works on a self written language, written in C++',
      ],
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
          <h2>{project.title}</h2>
          <p>
            <strong>Technologies:</strong> {project.technologies.join(', ')}
          </p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              GitHub {/* Replace with actual GitHub icon */}
            </a>
          )}
          {project.links && (
            <div>
              {project.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                  {link.label} (GitHub) {/* Replace with actual GitHub icon */}
                </a>
              ))}
            </div>
          )}
          <ul>
            {project.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Projects;