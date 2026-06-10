import profile from "./profile.jpg";
import SubtleGlitchText from "./SubtleGlitchText";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Home() {
  return (
    <div className="container">

      {/* HERO / HOME */}
      <div id="home" className="hero section">
        <div className="hero-text">
          <SubtleGlitchText text="Lakshmi Meghana Vaddamani" />
          <p className="usp">
            I’m driven to understand how systems are exploited - and how to build them so they aren’t.
          </p>
          <div className="social-icons">
      <a href="https://github.com/meghanavl" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:vaddamani.meghana1@gmail.com">
        <FaEnvelope />
      </a>
      <a href="https://linkedin.com/in/meghanavl" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>

      
    </div>
        </div>

        <div className="hero-img">
          <img src={profile} alt="Profile" />
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" className="section">
        <h2>About Me</h2>
        <p>
          Hi! I am Meghana, a Computer Science student at Mahindra University interested in cybersecurity,
          threat monitoring, and incident response. I have practical exposure to Microsoft Azure and
          Microsoft Sentinel during my internship at Tech Mahindra, and I am focused on building expertise
          in security operations and cyber defense.
        </p>
      </div>
      {/*RESEARCH INTERESTS*/}
      <div id="research" className="section">
        <h2>Research Interests</h2>
        <p className="research-desc">
  Areas I am interested in exploring and building expertise in:
</p>
        <div className="research-tags">
          <span>Cybersecurity</span>
          <span>Ethical Hacking</span>
          <span>Threat Detection</span>
          <span>Incident Response</span>
          <span>Cloud Security</span>
          <span>Network Security</span>
          <span>Security Operations (SOC)</span>
          <span>Digital Forensics</span>
          <span>Vulnerability Assessment</span>
        </div>
</div>

      {/* SKILLS */}
      <div id="skills" className="section">
  <h2>Skills</h2>

  <div className="skills-grid">

    {/* Core Concepts */}
    <div className="skill-card">
      <h3>Core Concepts</h3>
      <div className="tags">
        <span>Database Management</span>
        <span>Information Security</span>
        <span>Operating Systems</span>
        <span>Computer Networks</span>
      </div>
    </div>

    {/* Programming */}
    <div className="skill-card">
      <h3>Programming</h3>
      <div className="tags">
        <span>Python</span>
        <span>C</span>
        <span>JavaScript</span>
        <span>PowerShell</span>
        <span>MySQL</span>
      </div>
    </div>

    {/* Web Development */}
    <div className="skill-card">
      <h3>Web Development</h3>
      <div className="tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
        <span>Node.js</span>
      </div>
    </div>

    {/* Tools */}
    <div className="skill-card">
      <h3>Tools & Platforms</h3>
      <div className="tags">
        <span>GitHub</span>
        <span>Git</span>
        <span>MATLAB</span>
      </div>
    </div>

    {/* Security Tools */}
    <div className="skill-card">
      <h3>Security Tools</h3>
      <div className="tags">
        <span>Nmap</span>
        <span>Wireshark</span>
        <span>Metasploit</span>
        <span>Kali Linux</span>
        <span>Microsoft Azure</span>
        <span>Microsoft Sentinel</span>
      </div>
    </div>

  </div>
</div>

      {/* PROJECTS */}
      <div id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
        {/* Project 1 */}
        <div className="card">
        <h3>Incident Response Management System</h3>
        <p>Decision support system for analyzing and managing cybersecurity incidents.</p>

        <div className="tags">
          <span>Python</span>
          <span>Flask</span>
          <span>REST API</span>
          <span>NetworkX</span>
        </div>

        <div className="project-actions">
          <a
            href="https://github.com/meghanavl/Incident-Response-Management-System"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"> View on GitHub </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="card">
        <h3>Senior Citizens Digital Services App</h3>
        <p>Voice-enabled digital assistant to help senior citizens easily access essential services and reminders.</p>

        <div className="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React Native</span>
        </div>
        <div className="project-actions">
          <a href="https://github.com/Sahithi3205/Sahaaya"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"> View on GitHub </a> 
        </div>
      </div>

    {/* Project 3 */}
      <div className="card">
        <h3>Portfolio Website</h3>
        <p>Personal portfolio showcasing cybersecurity interests, technical skills, projects, experience, and achievements through a modern React-based interface.</p>

        <div className="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Github</span>
        </div>

        <div classname= "project-actions">
          <a href="https://github.com/meghanavl/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"> View on Github </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="card">
          <h3>E- Commerce Product Catalog</h3>
          <p>*description here*</p>

          <div className="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Github</span>
          </div>

          <div classname= "project-actions">
            <a href="https://github.com/meghanavl/E-Commerce-Product-Catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"> View on Github </a>
          </div>
      </div>

    {/* Project 4 */}
      <div className="card">
        <h3>Online Survey Web App</h3>
        <p>Full-stack survey system with analytics dashboard and visualization. </p>

        <div className="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Node.js</span>
        </div>
        <div>
          <a
            href="https://github.com/meghanavl/student-survey"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn">View on Github</a>
        </div>
      </div>

    </div>
  </div>

      {/* CONTACT */}
      <div id="contact" className="section contact-section">
  <h2>Contact</h2>

  <div className="contact-row">
    <a href="https://github.com/meghanavl" target="_blank" rel="noreferrer" className="contact-link">
      <FaGithub className="icon" />
      <span>meghanavl</span>
    </a>
    
    <a href="mailto:se23ucse103@mahindrauniversity.edu.in" className="contact-link">
      <FaEnvelope className="icon" />
      <span>se23ucse103@mahindrauniversity.edu.in</span>
    </a>
    <a href="tel:+91 7842613838" className="contact-link">
  <FaPhone className="icon" />
  <span>+91 7842613838</span>
</a>
    <a href="mailto:vaddamani.meghana1@gmail.com" className="contact-link">
      <FaEnvelope className="icon" />
      <span>vaddamani.meghana1@gmail.com</span>
    </a>
    <a href="https://linkedin.com/in/meghanavl" target="_blank" rel="noreferrer" className="contact-link">
      <FaLinkedin className="icon" />
      <span>meghanavl</span>
    </a>
    

  </div>
</div>

    </div>
  );
}

export default Home;