import React from 'react'
import './Home.css'
import astro from '../../assets/astro.png'
import pc from '../../assets/pc.png'
import david from '../../assets/david.png'

const Home = () => {
  return (
    <div>
        <section id="home">
            <div id="home-grid-top-left">
                <div id="outer-oval">
                    <div id="inner-circle">
                        <div id="inner-ball"></div>
                    </div>
                </div>
            </div>
            <div id="home-grid-top-right">
                <div id="astro-img-div">
                    <img id="astro-img" src="" alt="" srcset={astro} />
                </div>
            </div>
            <div id="home-grid-bottom-left">
                <div id="pc-img-div">
                    <img id="pc-img" src={pc} alt="" srcset="" />
                </div>
            </div>
            <div id="home-grid-bottom-right">
                <div id="david-img-div">
                    <img id="david-img" src={david} alt="" srcset="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home