import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div id="navbar-body">
            <div className="nav-item active">Home</div>
            <div className="nav-item">About</div>
            <div className="nav-item">Projects</div>
            <div className="nav-item">Contact</div>
        </div>
    </div>
  )
}

export default Navbar