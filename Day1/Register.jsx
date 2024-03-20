import React from 'react'

import pass_icon from '../assets/images/hidden_2355322.png'
import user_icon from '../assets/images/user_456212.png'
import mail_icon from '../assets/images/mail-icon_8056414.png'
import phone_icon from '../assets/images/telephone_126523.png'
import './Register.css'
import bg from '../assets/images/r.webp'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
   
    <div className='full_container'>
    <div className="container">
    <div className='header'>
      <div className='text'>Register</div>
      <div className='line'></div>
    </div>
    <div className='inputs'>
    <div className='input'>
    <label>Username</label>
    <input type='text' ></input>
      <img src={user_icon} height={20}></img>
     
    </div>
    <div className='input'>
      <label>Email</label>
      <input type='email' ></input>
      <img src={mail_icon} height={20}></img>
      
    </div>
    <div className='input'>
    <label>Password</label>
    <input type='password' ></input>
      <img src={pass_icon} height={20}></img>
      
    </div>
    <div className='input'>
    <label>Phone</label>
    <input type='number' ></input>
      <img src={phone_icon} height={20}></img>
    </div>
    </div>
    <div className='registerbutton'><Link to='/login'><button>Register</button></Link></div>
  </div>
  <div className='quote'>
  <div className='q1'>Elegance </div>
  <div className='q2'>in every event.</div>
  
  </div>
  
    </div>
   
  )
}

