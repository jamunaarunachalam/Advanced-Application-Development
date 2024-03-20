import React from 'react'
import './Corporate.css'
import Nave from './Nave'
import Footer from './Footer'
export default function Corporate() {
  return (
    <div className='full'>
    <Nave/>
    <div className='corporaterectangle'>
      <h1>CORPORATE EVENT PLANNING</h1>
    </div>
    <div className='corline1'></div>
      <div className='cvenue'><h1>VENUE & DECORATION</h1>
        <p1>OUTDOOR</p1>
        <p2>INDOOR</p2>
      </div>
    <div className='corline2'></div>
    <div className='corporatepic1'>
      <img src="https://sandiegowineandculinary.com/wp-content/uploads/photo-gallery/IMG_6491.jpg?bwg=1679591407" height={250}></img>
      <img src="https://www.ssav.net/wp-content/uploads/2021/09/Corporate-Outdoor-Events-Training.jpg" height={250}></img>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCaZyslQq6e60PClmCLY5zamJVDos07a_nskq6Bhafdvfd2h7nM2FdgOczywnIVkREWtY&usqp=CAU" height={250}></img>
      
    </div>
    <div className='corporatepic2'>
      <img src="https://www.bizzabo.com/wp-content/uploads/2021/09/Creative-Corporate-Event-Themes-MillerCoors.png" height={250}></img>
      <img src="https://partybangkok.com/wp-content/uploads/corporate_event_christmas_hotel_bangkok.jpg" height={250}></img>
      <img src="https://www.tantraa.net/images/portfolio/events/carousel2.png" height={250}></img>
    </div>
    <div className='photography'><h1>PHOTOGRAPHY</h1></div>
    <div className='corporatepic3'>
      <img src="https://blog.smarteventi.it/wp-content/uploads/outdoor-corporate-events-eventi-aziendali-allaperto.jpg" height={410}></img>
      <img src="https://webeatthestreet.com/wp-content/uploads/2018/12/shutterstock_768475918-min.jpg" height={300}></img>
      <img src="https://tripleseat.com/wp-content/uploads/2023/10/How-to-Market-Your-Venue-to-Corporate-Event-Planners.jpg" height={300}></img>
      
      
      
    </div>
    <Footer/>
    </div>
  )
}
