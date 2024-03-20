import React from 'react'
import './Wedding.css'
import Nave from '../pages/Nave'
import { Link } from 'react-router-dom'

import Footer from './Footer'
export default function Weddings() {
  return (
    <div className='full'>
    <Nave/>
    <div className='weddingrectangle'>
      <h1>WEDDING PLANNING</h1>
    </div>
    <div className='wedline1'></div>
      <div className='venue'><h1>VENUE & DECORATION</h1>
        <p1>OUTDOOR</p1>
        <p2>INDOOR</p2>
      </div>
    <div className='wedline2'></div>
    <div className='weddingpic1'>
      <img src="https://i.pinimg.com/736x/41/1d/1f/411d1f5cbc2a934d5561817c546fc90c.jpg" height={250}></img>
      <img src="https://www.ramabanquets.com/assets/img/blogs/indoor-vs-outdoor-wedding.jpg" height={250}></img>
      <img src="https://www.dreamzkraft.com/admin/blogImage/wedding-decoration-Listing-and-Top-image123.jpg" height={250}></img>
      
    </div>
    <div className='weddingpic2'>
      <img src="https://www.mconventions.com/wp-content/uploads/2022/12/Best-South-Indian-Mandaps-For-An-indoor-Wedding.jpeg" height={250}></img>
      <img src="https://i.pinimg.com/736x/7e/0c/f6/7e0cf60eef4cec9febbd8f187d7dc46e.jpg" height={250}></img>
      <img src="https://i.pinimg.com/1200x/6e/3e/3a/6e3e3a9fd91699a3d683f455c6a041a1.jpg" height={250}></img>
    </div>
    <div className='photography'><h1>PHOTOGRAPHY</h1></div>
    <div className='weddingpic3'>
      <img src="https://talkingpicturesindia.com/wp-content/uploads/2023/10/a-1-2.jpg" height={500}></img>
      <img src="https://wevaphotography.com/wp-content/uploads/2022/04/South-Indian-Wedding-Candid-Photography.jpg" height={500}></img>
      
      <img src="https://www.brides.com/thmb/kR2yum3x03l11lHpdF5eJbPP1tA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Meganadam-mexico-wedding-619-1bfde156f4aa4e308979356da9dd37c6.jpg" height={500}></img>
      <img src="https://www.redveds.com/wp-content/uploads/2023/10/IMG_2386-scaled-2-1-18-1.jpeg" height={500}></img>
      <img src="https://www.samturchinphoto.com/wp-content/uploads/2020/02/Malibu-Lodge-Malibou-Lake-Wedding-Colorful-Vibrant-Fun-Candid-Romantic-Bride-Groom-Cute_6-2.jpg" height={500}></img>
      <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/11/Inside-image-Wedding-Photographers6.jpg" height={500}></img>
      <img src="https://i.pinimg.com/736x/f2/07/fb/f207fbc0db946533fc01c87d985a053b.jpg" height={550}></img>
      <p>With exciting props, chic backdrops, high-quality prints, unlimited photos, Boomerangs, and videos, guests can’t stop coming back for more!</p>
      
    </div>
    <div className='booking'><Link to='/contact'><button>BOOK YOUR EVENTS</button></Link></div>
    <Footer/>
    </div>
  )
}
