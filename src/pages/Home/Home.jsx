import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import downArrow from '../../assets/downArrow.png'
const Home = () => {
  return (
    <div>
        <section id="home">
            <div id="navbar-section">
              <Navbar />  
            </div>
            <div id="main-section">
              <div id="name">
                Amal Thomas
              </div>
              <div id="role">
                Developer
              </div>
            </div>
            <div id="scroll-down-section">
              <div id="scroll-container">
                <div id="scroll-icon">
                  <img src={downArrow} alt="" srcset="" />
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Home