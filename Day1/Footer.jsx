import React from 'react'
import './About'
import './Login'
import './Gallery'
import './Booking'
import './Footer.css'
import { Link } from 'react-router-dom'
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { SlArrowRightCircle } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
export default function Footer() {
  return (
    <div>
    <footer className="footer">
    <div className="footer-content">
    <h1>ELEGANZA EVENTS</h1>
      <p>© 2023 Eleganza Events | Your Premier Source for Elegant Event Planning Solutions and Inspiration.</p>
    </div>
    <div className='media'>
    <a> <FaInstagram size={20} className='insta'/></a>
    <a><CiFacebook size={20} className='face'/> </a>
    <a><CiLinkedin size={20} className='link'/></a>
    <a><MdOutlineMailOutline size={20} className='mail' /></a>
    </div>
    <div className="contact">
    <h4>Contact Info</h4>
    <p><i><MdOutlinePhoneInTalk /></i>&nbsp;+91 9121324083</p>
    <p><i><MdOutlineMailOutline/></i>hydra@gmail.com</p>
    <p><i><MdOutlinePlace /></i>Coimbatore, India.</p>
    </div>
    <div className="hhcontact">
    <h4>Quick links</h4>
    <Link to='/about'><p><i>About</i></p></Link>
    <Link to='/contact'><p><i>Contact</i></p></Link>
    <Link to='/gallery'><p><i>Gallery</i></p></Link>
    <Link to='/login'><p><i>Login</i></p></Link>
    
   </div>
   
   
    </footer>
    
   </div>
   
  )
}
