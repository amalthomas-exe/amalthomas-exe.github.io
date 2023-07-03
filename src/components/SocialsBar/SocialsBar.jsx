import React from 'react'
import './SocialsBar.css'
import insta from '../../assets/Instagram.png'
import github from '../../assets/Github.png'
import linkedin from '../../assets/Linkedin.png'	

const SocialsBar = () => {
  return (
    <div>
        <div id="socials-bar">
            <div id="github" >
            <i className="fa-brands fa-github"></i>
            </div>
            <div id="linkedin">
            <i class="fa-brands fa-linkedin"></i>
            </div>
            <div  id="instagram">
                <i className='fa-brands fa-instagram'></i>
            </div>
        </div>
    </div>
  )
}

export default SocialsBar