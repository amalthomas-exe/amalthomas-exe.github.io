import React from 'react'
import NavIndicator from '../../components/navIndicator/navIndicator'
import './Home.css'
import SocialsBar from '../../components/SocialsBar/SocialsBar'
const Home = () => {
  return (
    <div>
      <section id="home">
        <div id="top-left-border-box"></div>
        <div id="bottom-right-border">
          <div class="grid-item"></div>
          <div class="grid-item">
            <NavIndicator />
          </div>
          <div class="grid-item">
           <SocialsBar />
          </div>
          <div class="grid-item">
          <div id="bottom-right-border-box"></div>
          </div>
        </div>
        <div id="head-section">
          <div id="uname">amalthomas_</div>
          <div id="dwnld-rsme-btn">
            <div id="dwnld-btn">Download Resume</div>
          </div>
        </div>
        <div id="content-section">
          <div id="intro-text">Hi, I'm</div>
          <div id="name-text">AMAL THOMAS</div>
          <div id="title">Developer</div>
          <div id="contact-btn">
            <div id="cntct-btn-text">
              Contact me
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home