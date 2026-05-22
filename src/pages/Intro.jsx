import { useState } from 'react'
import "../styles/Intro.css"
import profileImg from "../assets/LNPicture.jpg"

function Intro() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            {/* ── Navbar ─────────────────────────────────── */}
            <nav className="navbar">
                <a href="#home" className="logo">Ranjith</a>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {['Home', 'About', 'Skills', 'Works', 'Projects', 'Contact'].map(link => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
                        </li>
                    ))}
                </ul>
                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </nav>

            {/* ── Hero ── left text · right photo ─────────── */}
            <section id="home" className="hero">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        Seeking Werkstudent Position
                    </div>
                    <h1 className="hero-name">Ranjith Murthappa</h1>
                    <div className="hero-roles">
                        <span>Master’s Student</span>
                        <span className="sep">·</span>
                        <span>AI/ML & Backend Engineer</span>
                    </div>
                    <p className="hero-desc">
                        AI/ML & Backend Engineer with 3+ years' experience, building production-ready multi-agent and RAG systems using LangGraph, LangChain, FAISS, and ChromaDB. Focused on scalable LLM applications, semantic search, and generative AI.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn-primary">Get In Touch</a>
                        <a href="#works" className="btn-outline">View My Work</a>
                    </div>
                    <div className="hero-stack">
                        {['Python', 'Agentic AI', 'LangGraph', 'LangChain', 'FastAPI', 'Docker', 'SQL'].map(t => (
                            <span key={t}>{t}</span>
                        ))}
                    </div>
                </div>

                <div className="hero-photo">
                    <div className="photo-wrap">
                        <img src={profileImg} alt="Ranjith T M" />
                    </div>
                </div>
            </section>

            {/* ── Stats ──────────────────────────────────── */}
            <div className="stats-bar">
                {[
                    { n: '3+', l: 'Years Experience' },
                    { n: '5+', l: 'AI Products Deployed' },
                    { n: '10+', l: 'Teams Impacted' },
                    { n: '5+', l: 'LLM Frameworks' },
                ].map((s, i, arr) => [
                    <div className="stat" key={s.l}>
                        <strong>{s.n}</strong>
                        <span>{s.l}</span>
                    </div>,
                    i < arr.length - 1 && <div className="stat-sep" key={`d${i}`} />
                ])}
            </div>

            {/* ── About ──────────────────────────────────── */}
            <section id="about" className="section about-section">
                <p className="section-label">01 — About</p>
                <div className="about-grid">
                    <div className="about-text">
                        <h2>Who I Am</h2>
                        <p>
                            I'm an AI/ML Engineer with a backend engineer's instincts. After 3+ years building and scaling production systems,
                            I found my niche where it gets interesting: making large language models do useful, reliable work in the real world.
                        </p>
                        <p>
                            I build multi-agent AI systems — coordinating specialized LLM agents with LangGraph — alongside RAG pipelines that
                            ground AI in real knowledge using LangChain, FAISS, and ChromaDB, all on robust, scalable backends in FastAPI and Python.
                        </p>
                        <p>
                            What drives me is practicality: turning models into tools people actually use, from automating workflows to
                            powering semantic document search and context-aware chat.
                        </p>
                    </div>
                    <div className="about-side">
                        <p className="side-label">Tech Stack</p>
                        <div className="tag-cloud">
                            {['Python', 'LangGraph', 'LangChain', 'RAG', 'FastAPI', 'FAISS/ChromaDB',
                                'HuggingFace Transformers', 'Prompt Engineering', 'LLM Integration', 'Git', 'Docker', 'AWS'
                            ].map(tag => <span key={tag}>{tag}</span>)}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Skills ─────────────────────────────────── */}
            <section id="skills" className="section skills-section">
                <p className="section-label">02 — Skills</p>
                <h2 className="section-h2">Technical Expertise</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fas fa-brain" /></div>
                        <h3>AI &amp; LLM Engineering</h3>
                        <p>LangGraph, LangChain, RAG, Multi-Agent Systems, Prompt Engineering, FAISS, ChromaDB, HuggingFace Transformers, OpenAI, Groq, Ollama</p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fas fa-server" /></div>
                        <h3>Backend Development</h3>
                        <p>Python, FastAPI, Django, REST APIs, SQL, Data Processing Pipelines</p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fas fa-cogs" /></div>
                        <h3>Automation &amp; DevOps</h3>
                        <p>Docker, CI/CD, Git, GitHub, Linux, Shell Scripting, Selenium, PyTest</p>
                    </div>
                </div>
            </section>

            {/* ── Works ──────────────────────────────────── */}
            <section id="works" className="section works-section">
                <p className="section-label">03 — Works</p>
                <h2 className="section-h2">Live AI Products</h2>
                <div className="works-grid">
                    {[
                        {
                            num: '01', icon: 'fas fa-briefcase',
                            title: 'RecruitAI- Career Copilot',
                            desc: 'Multi-agent AI career assistant built with LangGraph — 8 specialized LLM agents (resume parsing, ATS scoring, interview prediction, cover letters) coordinated in one API call, served via a production FastAPI backend.',
                            tags: ['LangGraph', 'LangChain', 'FastAPI', 'GROQ', 'Docker', 'AWS', 'OpenAI'],
                            demo: 'http://13.60.72.88:8000/',
                            repo: 'https://github.com/ranjith-tm/RecruitAI-CareerCopilot',
                        },
                        {
                            num: '02', icon: 'fas fa-robot',
                            title: 'DocuMind-AI',
                            desc: 'End-to-end RAG pipeline for real-time document Q&A. HuggingFace embeddings + FAISS for semantic search, Groq LLM for fast accurate responses.',
                            tags: ['RAG', 'FAISS', 'Groq', 'HuggingFace', 'Streamlit'],
                            demo: 'https://docmind-question-answer-system.streamlit.app/',
                            repo: 'https://github.com/ranjith-tm/DocuMind-AI---RAG-based-Document-QA-System',
                        },
                        {
                            num: '03', icon: 'fas fa-comments',
                            title: 'IntelliRAG Chatbot',
                            desc: 'Context-aware chatbot using LangChain + ChromaDB for semantic retrieval over dynamic web sources, powered by Groq LLM with conversational memory.',
                            tags: ['LangChain', 'ChromaDB', 'Groq', 'RAG', 'Streamlit'],
                            demo: 'https://intellirag-chatbot.streamlit.app/',
                            repo: 'https://github.com/ranjith-tm/IntelliRAG-Context-Aware-Conversational-Assistant',
                        },
                        {
                            num: '04', icon: 'fas fa-graduation-cap',
                            title: 'Learnify AI',
                            desc: 'AI learning platform generating personalized study plans via Groq LLMs with structured prompt engineering, adaptive Q&A, and automated quizzes.',
                            tags: ['Groq', 'LLM', 'Prompt Engineering', 'Streamlit'],
                            demo: 'https://learnify-ai-smart-study-partner.streamlit.app/',
                            repo: 'https://github.com/ranjith-tm/Learnify-AI-Smart-Study-Partner',
                        },
                    ].map(w => (
                        <div className="work-card" key={w.num}>
                            <div className="work-card-top">
                                <span className="work-num">{w.num}</span>
                                <i className={w.icon} />
                            </div>
                            <h3>{w.title}</h3>
                            <p>{w.desc}</p>
                            <div className="card-tags">
                                {w.tags.map(t => <span key={t}>{t}</span>)}
                            </div>
                            <div className="card-links">
                                <a href={w.demo} target="_blank" rel="noreferrer" className="btn-primary btn-sm">Live Demo</a>
                                <a href={w.repo} target="_blank" rel="noreferrer" className="btn-outline btn-sm">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Projects ───────────────────────────────── */}
            <section id="projects" className="section projects-section">
                <p className="section-label">04 — Projects</p>
                <h2 className="section-h2">Engineering Projects</h2>
                <div className="projects-list">
                    {[
                        {
                            icon: 'fa fa-project-diagram', title: 'Telecom Data Automation Portal',
                            tags: ['React', 'Django', 'SQL Server', 'REST APIs', 'Linux'],
                            desc: 'Full-stack automation portal for telecom data validation and database updates. Clients upload files triggering auto-checks for format errors, null values, and duplicates. Adopted by 10+ teams, eliminating all manual work including weekends.',
                        },
                        {
                            icon: 'fas fa-mask', title: 'Masked Face Recognition System',
                            tags: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Keras'],
                            desc: 'AI-powered face mask detection for COVID-19 protocol monitoring. Integrates face detection with a CNN mask classification model for real-time safety compliance using computer vision and object detection.',
                        },
                        {
                            icon: 'fas fa-cloud-sun', title: 'Weather Forecasting Web App',
                            tags: ['Django', 'React', 'SQL Server', 'Weather API'],
                            desc: 'Full-stack weather app integrating external APIs for real-time data. Django backend, React frontend, and SQL Server storage with a responsive interactive UI.',
                        },
                    ].map(p => (
                        <div className="project-card" key={p.title}>
                            <div className="project-header">
                                <div className="project-icon"><i className={p.icon} /></div>
                                <div>
                                    <h3>{p.title}</h3>
                                    <div className="card-tags">
                                        {p.tags.map(t => <span key={t}>{t}</span>)}
                                    </div>
                                </div>
                            </div>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Contact ────────────────────────────────── */}
            <section id="contact" className="section contact-section">
                <p className="section-label center">05 — Contact</p>
                <h2 className="section-h2 center">Let's Work Together</h2>
                <p className="contact-intro">
                    Open to AI engineering roles, freelance projects, and research collaborations.
                </p>
                <div className="contact-cards">
                    <a href="mailto:tm.ranjith2@gmail.com" className="contact-card">
                        <i className="fas fa-envelope" />
                        <div>
                            <strong>Email</strong>
                            <span>tm.ranjith2@gmail.com</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ranjith-t-m-a385821a2/" target="_blank" rel="noreferrer" className="contact-card">
                        <i className="fab fa-linkedin" />
                        <div>
                            <strong>LinkedIn</strong>
                            <span>ranjith-t-m-a385821a2</span>
                        </div>
                    </a>
                    <a href="https://github.com/ranjith-tm/Ranjith-AutomationHub" target="_blank" rel="noreferrer" className="contact-card">
                        <i className="fab fa-github" />
                        <div>
                            <strong>GitHub</strong>
                            <span>ranjith-tm</span>
                        </div>
                    </a>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Ranjith Thimmalapura Murthappa</p>
            </footer>
        </div>
    )
}

export default Intro
