"use client";
import { useState } from "react";
import Image from "next/image";


export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
}

  return (
    <>
     <header>
        <a href="#" className="logo-holder">
            <div className="logo">AA</div>
            <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="mailto:mandiblesolution@gmail.com"className="button">Contact Me</a>
                </li>
            </ul>
            <a href="#" className="mobile-toggle"
            onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
                  </svg>
                  
            </a>
        </nav>
    </header>
    <main>
        <section className="hero container">
            <div className="hero-blue">
                <div>
                    <h1><small>Hi, I'm </small>Adeniyi Adeniran</h1>
                    <p>
                        A passionate frontend developer with a knack for creating beautiful and functional web applications. I love bringing designs to life, ensuring they’re as user-friendly as they are visually stunning. <span>Beyond coding, I enjoy exploring new web technologies, contributing to open-source projects, and collaborating with like-minded developers. My goal? To craft web experiences that not only work seamlessly but also leave a lasting impression!</span>
                    </p>
                    <div className="call-to-action">
                        <a href="/imgs/frontend_developer_resume.docx" className="button black">
                            View Resume
                        </a>
                        <a href="mailto:mandiblesolution@gmail.com" className="button white">
                            Contact Me
                        </a>
                    </div>
                    <div className="Social Links">
                        <a href="#">
                            <img src="/imgs/github.png" alt="Github" width="48" />
                        </a>
                        <a href="https://www.linkedin.com/in/adeniyi-adeniran-6919631b5/" target="_blank">
                            <img src="/imgs/linkedIn.png" alt="LinkedIn" width="48" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-yellow">
                <img src="/imgs/hero-image.jpg" alt="Adeniyi Adeniran Pic" width="100%"/>
            </div>
        </section>
        <section className="logos container">
            <div className="marquee">
                <div className="track">
                    <img src="/imgs/html.png" alt="HTML" width="128"/>
                    <img src="/imgs/css.png" alt="CSS" width="128"/>
                    <img src="/imgs/javascript.png" alt="JavaScript" width="128"/>
                    <img src="/imgs/react.png" alt="React" width="128"/>
                    <img src="/imgs/nextjs.png" alt="Next.js" width="128"/>
                    <img src="/imgs/python.png" alt="Python" width="128"/>
                    <img src="/imgs/vscode.png" alt="Vscode" width="128"/>
                    <img src="/imgs/typescript.png" alt="Typescript" width="128"/>
                    <img src="/imgs/anjularjs.png" alt="Angular" width="128"/>
                    <img src="/imgs/html.png" alt="HTML" width="128"/>
                    <img src="/imgs/css.png" alt="CSS" width="128"/>
                    <img src="/imgs/javascript.png" alt="JavaScript" width="128"/>
                    <img src="/imgs/react.png" alt="React" width="128"/>
                    <img src="/imgs/nextjs.png" alt="Next.js" width="128"/>
                    <img src="/imgs/python.png" alt="Python" width="128"/>
                    <img src="/imgs/vscode.png" alt="Vscode" width="128"/>
                    <img src="/imgs/typescript.png" alt="Typescript" width="128"/>
                    <img src="/imgs/anjularjs.png" alt="Angular" width="128"/>
                </div>
            </div>
        </section>
        <section id="skills" className="skills container">
            <h2>
                <small>About Me</small>
                Skills
            </h2>
            <div className="holder-blue">
                <div className="left-column">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Angular</li>
                        <li>Typescript</li>
                    </ul>
                </div>
                <div className="right-column">
                    <h3>A bit about me</h3>
                    <p> Hi I'm Adeniran, a developer who bring designs to life with clean, user-friendly code, turning ideas into interactive digital experiences. </p>
                    <p>  I mix creativity with code to deliver websites that don’t just look good—they feel good. I ensure every click, hover, and scroll feels seamless and engaging. Whether it’s a sleek website or a dynamic web app. Let’s build something amazing and unforgettable together! 🚀</p>
                </div>
            </div>
        </section>
        <section className="work-experience container">
            <h2>
                <small>Recent</small>
                Work Experiences
            </h2>
            <div className="jobs">
                <article>
                    <figure>
                        <div>
                            <a href="https://danflowfoods.com/" target="_blank">
                            <img src="/imgs/danf.png" alt="Danflowfoods website" width="100%"/>
                            <figcaption>Danflowfoods</figcaption>
                            </a>
                        </div>
                    </figure>
                    <h3>E-commerce Web Designer</h3>
                    <div>Oct 2020 - Nov 2021</div>
                    <p>Created responsive and interactive website using shopify and custom HTML and CSS. Resolved bugs and improve website performance.</p>
                </article>
                <article>
                    <figure>
                        <div>
                            <a href="https://hydramed.com/" target="_blank">
                            <img src="/imgs/HydraMed-Logo.png" alt="Hydramed website" width="100%"/>
                            <figcaption>Hydramed</figcaption>
                            </a>
                        </div>
                    </figure>
                    <h3>Junior Frontend Developer</h3>
                    <div>Dec 2021 - Nov 2023</div>
                    <p>Collaborated with cross-functional team to troubleshoot and resolve frontend issues. Conducted code reviews and provided constructive feedback.</p>
                </article>
                <article>
                    <figure>
                        <div>
                            <a href="https://www.spinached.co.uk/" target="_blank">
                            <img src="/imgs/spinached.png" alt="Spinached website" width="100%"/>
                            <figcaption>Spinached</figcaption>
                            </a>
                        </div>
                    </figure>
                    <h3>Frontend Developer</h3>
                    <div>Nov 2023 - 2024</div>
                    <p>Developed responsive web application and worked with designer to implement pixel-perfect UI designs with SEO optimized contents.</p>
                </article>
            </div>
        </section>
        <section id="projects" className="bento container">
            <h2>
                <small>Previous</small>
                Completed Projects
            </h2>
            <div className="bento-grid">
                <a href="https://danflowfoods.com/" className="bento-item">
                    <img src="/imgs/workplace1.PNG" alt="Danflowfoods" width="100%"/>
                </a>
                <a href="https://www.spinached.co.uk/" className="bento-item">
                    <img src="/imgs/workplace 3.PNG" alt="Spinanched" width="100%"/>
                </a>
                <a href="https://www.kindredlabs.ai/" className="bento-item">
                    <img src="/imgs/metapals.png" alt="Metapals" width="100%"/>
                </a>
                <a href="https://www.fiverr.com/users/swift3690" className="bento-item">
                    <img src="/imgs/workplace 4.PNG" alt="Fiverr" width="100%"/>
                </a>
                <a href="https://webdiner.com/" className="bento-item">
                    <img src="/imgs/webdiner.PNG" alt="Webdiner" width="100%"/>
                </a>
                <a href="https://hydramed.com/" className="bento-item">
                    <img src="/imgs/workplace 2.PNG" alt="Hydramed" width="100%"/>
                </a>
            </div>
        </section>
    </main>
    </>   
  );
}
