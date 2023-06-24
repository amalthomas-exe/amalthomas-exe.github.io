import React from 'react'
import './About.css'

const About = () => {
    return (
        <div>
            <section id="about">
                <div id="about-body">
                    <div id="about-tag-opening">
                        {"<about>"}
                    </div>
                    <div id="about-contents">
                        <div id="about-text">
                            A computer science student with an extensive knowledge in <div id='highlight-skin-brown' className="highlighted">Web Designing</div> and <div id="highlight-yellow" className="highlighted">major</div> <div id="highlight-yellow" className="highlighted">programming</div> <div id="highlight-yellow" className="highlighted">languages</div> 
                        </div>
                        <div id="skills-box">
                            <div id="skills-back-circle">
                                <div id="skills-cards-box">
                                    <div id="skill-cards">
                                        <div className="card">Python</div>
                                        <div className="card">Python</div>
                                        <div className="card">Python</div>
                                        <div className="card">Python</div>
                                        <div className="card">Python</div>
                                        <div className="card">
                                            SKILLS
                                            <div id='skills-top-card-subtext'>
                                                Hover over me
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="about-tag-closing">
                        {"</about>"}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About