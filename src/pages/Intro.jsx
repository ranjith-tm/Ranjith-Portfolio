import "../styles/Intro.css"
function Intro(){
    return (
    <div>
        <nav className="navbar">
            <a href="#home" className="logo">PythonDev</a>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
            <section id="home" className="hero">
                <div className="hero-content">
                    <h1>Full Stack Developer</h1>
                    <p>Developed and maintained large-scale web application using Python, Django, React and SQL</p>
                    <p className="highlight"> Also, Specialized in Automation</p>
                    <a href="#contact" className="cta-button">Let's Connect</a>
                </div>
                <div className="hero-image">
                    <img src="ProfilePic.JPG" alt="profile" className="profile-img"/>
                </div>
            </section>

            <section id="skills" className="skills">
                <h2>Technical Expertize</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <i className="fas fa-laptop-code"></i>
                        <h3>Automation Development</h3>
                        <p>Python, Shell Script, Ansible, Selenium</p>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-server"></i>
                        <h3>Backend Development</h3>
                        <p>Django, Python</p>
                    </div>
                    <div className="skill-card">
                        <i className="fas fa-palette"></i>
                        <h3>Frontend Development</h3>
                        <p>React, HTML, CSS</p>
                    </div>
                </div>
            </section>

            <section id="projects" className="projects">
                <h2>Projects</h2>
                <div className="projects-grid">
                    <div className="projects-card">
                        <i className="fa fa-project-diagram"></i>
                        <h3>Telecom Data Automation Portal</h3>
                        <p>Built a full-stack React–Django–SQL Server application to automate telecom data validation and database updates.</p>
                        <p>Enabled clients to upload files through a web portal, triggering automatic checks for format, null values, and duplicates.</p>
                        <p>Used by 10+ teams, eliminating manual work (including weekends/holidays) and significantly improving operational efficiency.</p>
                        <p>Tools Used: React.js, Django, SQL Server, REST APIs, HTML, CSS, JavaScript, Linux</p>
                    </div>
                    <div className="projects-card">
                        <i className="fas fa-robot"></i>
                        <h3>Masked face recognition for covid-19 protocol monitoring</h3>
                        <p>Developed an AI-powered face mask detection system using image processing and machine learning techniques.</p>
                        <p>Integrated face detection algorithms with a mask classification model to identify mask status on individuals.</p>
                        <p>Applied object detection principles to enable real-time monitoring for safety and compliance with mask-wearing
 regulations.</p>
                        <p>Tools Used: Python3, Computer Vision, Object Detection, Segmentation, CNN, Tensor Flow, Open CV and Keras</p>
                    </div>
                    <div className="projects-card">
                        <i className="fas fa-cloud-sun"></i>
                        <h3>Weather Forecasting Web Application</h3>
                        <p>Built a full-stack weather application using Django (backend), React (frontend), and SQL Server for data storage.</p>
                        <p>Integrated external weather APIs to display real-time weather data with a responsive and interactive UI.</p>
                        <p>Designed a modular and scalable system for efficient data processing and smooth user experience.</p>
                        <p>Tools Used: Django, React.js, SQL Server, REST APIs, HTML, CSS, JavaScript</p>
                    </div>
                </div>
            </section>
            <footer id="contact" className="footer">
                <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
                {/* <h2>Contacts</h2> */}
                <div className="social-links">
                    <a href="https://github.com/ranjith-tm/Ranjith-AutomationHub"><i className="fab fa-github"></i></a>
                    <a href="tm.ranjith2@gmail.com"><i className="fab fa-google"></i></a>
                    <a href="https://www.linkedin.com/in/ranjith-t-m-a385821a2/"><i className="fab fa-linkedin"></i></a>
                </div>
            </footer>
    </div>
    );
}

export default Intro;