import React, { useEffect, useState } from 'react'
import './Home.css'

import image2 from '../assets/images/image2.jpg'
import image33 from '../assets/images/e.jpg'
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { SlArrowRightCircle } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

import Nave from  './Nave';

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['https://marrymetampabay.com/wp-content/uploads/2022/06/26Romantic-Pink-and-Blue-Pastel-Clearwater-Garden-Wedding.jpg',
  'https://www.weddingsutra.com/images/wedding-images/desti_wed/prevind-veena/veena-prevind-27.jpg',
  'https://symphonyevents.com.au/wp-content/uploads/2023/02/JKHinduWeddingHighRes-284-scaled.jpg',
  
  'https://images.squarespace-cdn.com/content/v1/52574d61e4b0040971b675a0/1706330493527-SFF0S3UG0KD3858WUOBB/043A2111.jpg?format=1500w']; 
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);
  
  const handleScroll = () => {
    const scrollableContainer = document.querySelector('.scrollable-container');
    if (scrollableContainer) {
      const scrollPosition = window.scrollY;
      const containerOffset = scrollableContainer.offsetTop;

      if (scrollPosition > containerOffset - window.innerHeight / 2) {
        scrollableContainer.classList.add('show');
      } else {
        scrollableContainer.classList.remove('show');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
    <Nave/>
    <section class="Home">
    <div className='himage'>
    
    <img src={images[imageIndex]} alt={`Image ${imageIndex}`} className='darken-image fade-in' />
    <div className='heading'>
    <img src={image33} ></img>
    <h1>ELEGANCE__EVENTS</h1>
    <p>A METICULOUSLY-DETAILED PROCESS 
    FOR PLANNING YOUR EVENT</p>
    <p2>You’re ready to host an unforgettable celebration— 
    but planning the perfect party doesn’t have to be 
    as overwhelming as it may seem</p2>
    </div>
    </div>
    </section>
   
    <div className='scrollable-container'>
      <p1>Welcome to Elegance Unveiled</p1>
      <p2>Where Every Event is a Masterpiece</p2>  
      <div className='himage1'>
        <img src='https://www.greenvelope.com/blog/wp-content/uploads/group-of-people-at-a-party.jpeg'height={200}></img>
      </div>
      <div className='himage2'>
        <img src='https://wp-media-partyslate.imgix.net/2021/05/photo-b985f2fe-ac8d-41e1-b6d8-3e83c3a2f580.jpeg?auto=compress%2Cformat&ixlib=php-3.3.1'height={200}></img>
      </div>
      <div className='himage3'>
        <img src={image2}height={200}></img>
      </div>
  
       
        <div className='hline1'></div>
        <div className='hline2'></div>
        <div className='hline3'></div>
        <div className='hline4'></div>
        <div className='hline5'></div>
        <div className='hline6'></div>
      <div className='events'>
        <p3>Weddings</p3>
        <p4>Corporate Events</p4>
        <p5>Social Events</p5>
      </div>
      <div className='icons1'><Link to='/wedding'><SlArrowRightCircle size={30}/></Link></div>
      <div className='icons2'><Link to='/corporate'><SlArrowRightCircle size={30}/></Link></div>
      <div className='icons3'><Link to='/social'><SlArrowRightCircle size={30}/></Link></div>
      
    </div>
    <footer className="hfooter">
      <div className="hfooter-content">
      <h1>ELEGANZA EVENTS</h1>
        <p>© 2023 Eleganza Events | Your Premier Source for Elegant Event Planning Solutions and Inspiration.</p>
      </div>
      <div className='hmedia'>
      <a> <FaInstagram size={20} className='hinsta'/></a>
      <a><CiFacebook size={20} className='hface'/> </a>
      <a><CiLinkedin size={20} className='hlink'/></a>
      <a><MdOutlineMailOutline size={20} className='hmail' /></a>
      </div>
      <div className="hcontact">
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
