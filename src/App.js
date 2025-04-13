import './App.css';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Projects from './Projects';
import Contact from './Contact';
import Background from './Background';
import CV from './CV';

// HomePage component
function Home() {
  const skills = [
    "R", "python", "javascript", "shiny", "dplyr", "purrr", "ditto",
    "ggplot", "d3", "canvas", "spark", "sawk", "pyspark", "sparklyR",
    "lodash", "lazy", "bootstrap", "jupyter", "vulpix", "git", "flask",
    "numpy", "pandas", "feebas", "scikit", "bgm", "bayes", "h20.ai",
    "sparkling-water", "tensorflow", "keras", "onyx", "ekans", "hadoop", 
    "scala", "unity", "gc", "metapod", "c#/c++", "krebase", "neo4j"
  ];

  return (
    <div className="home-container">
      <div className="home-content">
        <img src="/profile.jpg" alt="Profile" className="home-image"
        />
        <h1>Hello, I'm Shiva!</h1>

        <h3>Great to meet you!</h3>
        <div className='tagline'>
          <div className="skills-list">
            {skills.join(", ")}
          </div>
          <p>I typically ask recruiters to point out which of these are pokemon.</p>
        </div>
      </div>
    </div>
  );
}

// About Component
function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <div className='about-section'>
          <div className='text-section'>
          <p>
            Hello! I'm <b>Shivanirudh</b>, a passionate programmer and AI/ML enthusiast based in Chennai. 
            I'm currently pursuing my Master's in Computer Science at <b>IIIT Bangalore</b>, specializing in Artificial Intelligence and Machine Learning (graduating July 2025). 
            I completed my Bachelor's in Computer Science from <b>SSN College of Engineering</b> in June 2018.
          </p>

          <p>
            I've worked with organizations like <b>Everwell (Microsoft Research India)</b> and <b>Mad Street Den</b>, 
            gaining hands-on experience with LLMs, real-world data pipelines, and building end-to-end ML applications. 
            My interests lie in <b>Machine Learning</b>, <b>Natural Language Processing</b>, and <b>Data Science</b>.
          </p>

          <p>
            Some of the projects I’ve worked on include <b>Flight Delay Prediction</b> using various ML models, 
            a <b>Voice App Launcher</b> built in Python, an <b>AI-powered health data entry tool</b> (FillPat), and 
            a <b>Personal Auto Prompt Generator</b> using Deep Learning with ChatGPT. 
            I’ve also co-authored research on <i>Bayesian Uncertainty Modeling</i> for genre classification.
          </p>

          <p>
            I’m proficient in <b>Python, C++, Java, and JavaScript</b>, and have worked with frameworks like 
            <b>PyTorch, TensorFlow, Flask, and React</b>. I hold certifications from Google, Coursera, and NPTEL in areas 
            including Deep Learning, NLP, and Competitive Programming.
          </p>

          <p>
            Outside of work, I enjoy playing <b>basketball</b> and reading a good book.
          </p>
          </div>
        </div>
        <div className='cta-section'>
          <p>Feel free to reach out for project collaborations and Open Source contributions. :)</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </div>
  );
}

// App Component
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Background />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/cv" element={<CV/>} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
