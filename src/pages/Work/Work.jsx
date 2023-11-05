import React from 'react'
import "./Work.css"
import js from "../../assets/js.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"

const Work = () => {
  return (
    <div>
        <section id="work">
            <div id="work-sctn-head">
              MY WORK
            </div>
            <div id="work-showcase-area">
              <div id="work-preview-box">

              </div>
              <div id="work-details-box">
                <div id="detail-card">
                  <div id="detail-card-title">
                    News App
                  </div>
                  <div id="detail-card-desc">
                    Card based news app built with React Native.
                  </div>
                  <div id="stack-logos">
                    <img src={js} alt="" className="logo" />
                    <img src={html} alt="" className="logo" />
                    <img src={css} alt="" className="logo" />
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Work