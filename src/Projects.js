import React from 'react';
import {FaGithub, FaRobot, FaCar, FaCashRegister, FaGamepad, FaNetworkWired, FaPlane, FaMicrophoneAlt, FaScrewdriver, FaBook, FaWpforms, FaLink} from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Artificial Pancreas',
      technologies: ['Python'],
      description: [
        'Developing a RL-based control algorithm for incorporating with an artificial pancreas device',
        'Exploring various dynamic control strategies to maximise comfort for the person wearing the device',
      ],
      icon: 'FaRobot'
    },
    {
      id: 2,
      title: 'Soft Actor Critic Variation',
      technologies: ['Python'],
      link: 'https://github.com/Shivanirudh/SAC-variant',
      description: [
        'Combines the Soft Actor Critic algorithm with safety constraints and domain knowledge.',
        'Achieved promise for a more robust algorithm by testing on the Pendulum environment',
      ],
      icon: 'FaCar',
    },
    {
      id: 3,
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
      icon: 'FaGamepad',
    },
    {
      id: 4,
      title: 'University Finance Portal',
      technologies: ['Java Springboot', 'React JS'],
      link: 'https://github.com/Shivanirudh/University-Finance-Portal',
      description: [
        'A web application that simulates the usage of faculty logging in and perform financial transactions, built using Springboot and ReactJS',
      ],
      icon: 'FaCashRegister',
    },
    {
      id: 5,
      title: 'Auto Prompt Generator',
      technologies: ['Python'],
      description: [
        'Deep Learning model that generates prompts for tasks, which can be tweaked with feedback. ',
        'Uses ChatGPT as a blackbox to learn from.',
      ],
      icon: 'FaNetworkWired'
    },
    {
      id: 6,
      title: 'Flight Delay Prediction',
      technologies: ['Python'],
      link: 'https://github.com/Shivanirudh/FlightDelayPrediction',
      description: [
        'Machine Learning project to predicts delays and amount of delay in flights, written in Python.',
        'Performs comparison amongst various classifier and regressor models for both the tasks.',
      ],
      icon: 'FaPlane'
    },
    {
      id: 7,
      title: 'Voice App Launcher',
      technologies: ['Python'],
      description: [
        'Application that works like an app launcher to launch apps in response to vocal commands.',
        'Written in Python, it converts audio to text to understand instructions.',
      ],
      icon: 'FaMicrophoneAlt'
    },
    {
      id: 8,
      title: 'Interpreter',
      technologies: ['C++'],
      description: [
        'Program that mimics the basic functionality of an interpreter that works on a self written language, written in C++',
      ],
      icon: 'FaScrewdriver'
    },
    { id: 9, 
      title: 'Genre Classification', 
      technologies: ['Python, PyTorch'],
      description: ['Exploring Bayesian Uncertainty Modeling for Book Genre Classiﬁcation'], 
      link: 'https://github.com/Shivanirudh/GenreClassification'  
    },
    { id: 10, 
      title: 'FillFast', 
      technologies: ['Python', 'JavaScript'],
      description: ['An AI-Powered Tool for Health Data Entry', 'Chrome extension built as part of summer internship at Everwell Health Solutions, deployed at two hospitals in Bangalore'], 
    }
  ];

  return (
    <div className='projects-content'>
      <h1>My Projects</h1>

      <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <h3>
              {project.id === 1 && <FaRobot/>}{project.id === 2 && <FaCar/>}
              {project.id === 3 && <FaGamepad/>}{project.id === 4 && <FaCashRegister/>}
              {project.id === 5 && <FaNetworkWired/>}{project.id === 6 && <FaPlane/>}
              {project.id === 7 && <FaMicrophoneAlt/>}{project.id === 8 && <FaScrewdriver/>}
              {project.id === 9 && <FaBook/>}{project.id === 10 && <FaWpforms/>}
              {"  "}
              {project.title}</h3>
              <p>{project.technologies.join(', ')}</p>
              <p>{project.description.join('; ')}</p>
              {/* {project.link && <a href={project.link}><FaGithub/> Link to GitHub repo</a>} */}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub/>Link to GitHub
                </a>
              )}
              {project.links && (
                <div>
                  {project.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                      {link.label} <FaGithub/> {/* Replace with actual GitHub icon */}
                    </a>
                  ))}
                </div>
              )}
              <p>{project.id === 9 && <a href="https://ieeexplore.ieee.org/document/9887417"><FaLink/>Link to paper</a>}</p>
            </div>
          ))}
      </div>
      </div>
  );
}

export default Projects;