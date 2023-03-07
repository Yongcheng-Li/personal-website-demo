import React, { useState } from "react";
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="App">
      <header className="sticky-header">
        <div className="header-left">
          <h1 style={{ fontSize: '36px', marginBottom: '0' }}>Welcome To My Personal Website!</h1>
          <nav>
            <ul>
              <li
                className={activeTab === 'about' ? 'active' : ''}
                onClick={() => handleTabClick('about')}
              >
                <a href="#">About</a>
              </li>
              <li
                className={activeTab === 'skills' ? 'active' : ''}
                onClick={() => handleTabClick('skills')}
              >
                <a href="#">Skills</a>
              </li>
              <li
                className={activeTab === 'projects' ? 'active' : ''}
                onClick={() => handleTabClick('projects')}
              >
                <a href="#">Projects</a>
              </li>
              <li
                className={activeTab === 'contact' ? 'active' : ''}
                onClick={() => handleTabClick('contact')}
              >
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ paddingTop: '150px', margin: '70px' }}>
        {activeTab === "about" && (
          <section id="about">
            <h2>About Me</h2>
            <img src="./Me.jpg" alt="My Photo" />
            <p>Hi, my name is Yongcheng Li and I'm a graduate student major in cybersecurity at UNB.</p>
            <a href="https://www.unb.ca/" target="_blank">
              <h2>About UNB</h2>
            </a>
            <img src="./UNB.jpg" alt="UNB Photo" />
            <p style={{ textAlign: 'left' }}>The University of New Brunswick is a public research university located in Fredericton, New Brunswick, Canada. It was founded in 1785 and is the oldest English-language university in Canada.</p>
            <p style={{ textAlign: 'left' }}>UNB is organized into two main campuses, one in Fredericton and one in Saint John, and offers a wide range of undergraduate and graduate programs in fields such as business, engineering, science, and arts. The university is known for its strong research programs, particularly in the fields of engineering, forestry, and information technology.</p>
            <p style={{ textAlign: 'left' }}>UNB is also home to the Institute of Biomedical Engineering, the Institute of Cybersecurity, and the Canadian Rivers Institute, among other research centers. The university has a strong focus on innovation and entrepreneurship, and has produced many successful startup companies over the years.</p>
            <p style={{ textAlign: 'left' }}>With a student population of around 11,000, UNB is a small but vibrant community that offers a supportive learning environment and a range of extracurricular activities for students to get involved in. Whether you're interested in research, entrepreneurship, or just exploring new ideas, UNB is a great place to pursue your academic and professional goals.</p>
          </section>
        )}
        {activeTab === "skills" && (
          <section id="skills">
            <h2>Skills</h2>
            <ul className="no-bullet">
              <li>Java</li>
              <li>Python</li>
              <li>C/C++</li>
              <li>SQL</li>
              <li>Android</li>
              <li>Git</li>
              <li>Linux</li>
              <li>Windows</li>
              <li>Visual Studio Code</li>
              <li>IntelliJ</li>
              <li>PyCharm</li>
              <li>Android Studio</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </section>
        )}
        {activeTab === "projects" && (
          <section id="projects">
            <h2>Projects</h2>
            <ul className="no-bullet">
              <li>
                <a href="https://github.com/Yongcheng-Li/InternDemo" target="_blank">
                  <img src="./bekaert.png" alt="Project 1" />
                  <h3>Project-1</h3>
                </a>
                <p>Design a simple Website </p>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=rlHTdZMYC4Y" target="_blank">
                  <img src="./callender.png" alt="Project 2" />
                  <h3>Project 2</h3>
                </a>
                <p>Calendar application, front-end UI design. </p>
              </li>
              <li>
                <a href="https://github.com/Yongcheng-Li/Market" target="_blank">
                  <img src="./android.png"  alt="Project 3" />
                  <h3>Project 3</h3>
                </a>
                <p>use AndroidStudio to complete Trading App development. </p>
              </li>
            </ul>
          </section>
        )}
        {activeTab === "contact" && (
          <section id="contact" className="contact-section">
            <div className="container">
              <h2 className="section-heading">Contact Me</h2>
              <div className="row">
                <div className="col-md-6">
                <form>
                  <div className="form-group">
                    <label htmlFor="name" className="horizontal-label">Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="horizontal-label">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="horizontal-label">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  <button type="submit">Send Message</button>
                </form>
                </div>
                <div className="col-md-6">
                  <div className="contact-info">
                    <h3>Contact Information</h3>
                    <ul className="no-bullet">
                      <li>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:billli2013@gmail.com">billli2013@gmail.com</a>
                      </li>
                      <li>
                        <i className="fas fa-phone"></i>
                        <a href="tel:506-801-9979">506-801-9979</a>
                      </li>
                      <li>
                        <i className="fab fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/yongcheng-li-73a356265/" target="_blank">https://www.linkedin.com/in/yongcheng-li-73a356265/</a>
                      </li>
                      <li>
                        <i className="fab fa-github"></i>
                        <a href="https://github.com/Yongcheng-Li" target="_blank">https://github.com/Yongcheng-Li</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}


      </main>
      <footer>
        <p>© {new Date().getFullYear()} Yongcheng. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
