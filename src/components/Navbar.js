import React from 'react'
import Logo from '../assets/s.png'  
import { Link } from 'react-router-dom'  
import MenuIcon from '@mui/icons-material/Menu';

import "../styles/Navbar.css"
function navbar() {
  return (
    <div className='navbar'>
      <div className='leftside'> <img src='https://static.vecteezy.com/system/resources/thumbnails/008/490/518/small/capital-s-fire-alphabet-letters-icon-design-png.png'></img></div> 
      <div className='rightside'>
        <Link to="/">Home</Link> 
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> 
        <button>
        <ReorderIcon /> 
        </button>

      </div>
    </div>
  )
}

export default navbar
