import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import e_icon from '../assets/images/mail-icon_8056414.png'
import p_icon from '../assets/images/hidden_2355322.png'
import { Link } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    if (email === 'admin@gmail.com' && password === 'adminpassword') {
      console.log("Admin login successful");
      
      navigate('/admin');
      return;
    }

    
    navigate('/');
  };
  
 
  return (
    <div className='loginimg'>
      <div className='lcontainer'>
        <div className='lheader'>
          <div className='ltext'>Login</div>
        </div>
        
        <div className='linput'>
          <div className='linputs'>
            <img src={e_icon} height={25}></img>
            <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div className='linputs'>
            <img src={p_icon} height={25}></img>
            <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
          {error && <div className='error'>{error}</div>}
          <div className='loginbutton'>
            <Link to='/'><button onClick={handleLogin}>Login</button></Link>
          </div>
        </div>
        <div className='already'><p>Don't you have an account? </p><Link to='/register'><button>Register here</button></Link></div>
      </div>
      <div className='lreact'>
        <div className='ltxt1'><p>Please login to view your dashboard</p></div>
      </div>
    </div>
  )
}

