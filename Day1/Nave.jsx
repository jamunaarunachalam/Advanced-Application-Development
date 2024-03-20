import React ,{useState}from 'react'
import './Nave.css'
import { Link } from 'react-router-dom'
export default function Nave() {
 
  
  return (

    <div>
    <div className="navbar">
      <div class="section">
        <a href="" class="smooth-scroll"><Link to='/'>Home</Link></a>
        <a href="" class="smooth-scroll"><Link to='/about'>About</Link></a>
        
        <a href="" class="smooth-scroll"><Link to='/gallery'>Gallery</Link></a>
        <a href="" class="smooth-scroll"><Link to='/contact'>Contact</Link></a>
        <a href="" class="smooth-scroll"><Link to='/login'>Login</Link></a>
        <a href="" class="smooth-scroll"><Link to='/userprofile'>Profile</Link></a>
      </div>
  </div>

  
    </div>
    
  )
}
