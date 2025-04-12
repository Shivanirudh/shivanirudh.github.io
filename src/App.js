import './App.css';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Projects from './Projects';
import Contact from './Contact';

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

        <p>Great to meet you!</p>
        <div className="skills-list">
          {skills.join(", ")}
        </div>
        <p>I typically ask recruiters to point out which of these are pokemon.</p>
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
        <p>
          Hello! I'm Shivanirudh, a passionate and creative programmer based out of Chennai.
          I am currently a student at IIIT Bangalore pursuing my postgraduate education in Computer Science and Engineering. I am interested in the fields of Machine Learning, Data Science and Natural Language Processing.
        </p>
        <p>
          My journey in the world of coding began during my studies at SSN College of Engineering. Since then, I have been dedicated to continuous learning, staying updated with the latest technologies and industry trends.
        </p>
        <p>
          I've had the privilege of working with amazing teams at Mad Street Den and this has allowed me to contribute to a variety of projects. I am proficient in languages such as Python and C++, and tools like PyTorch and OpenCV in addition to software like Git. I'm always excited to take on new challenges that allow me to expand my skill set. 
        </p>
        <p>
        Outside of coding, you can find me playing basketball, or enjoying a good book
        </p>
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
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
