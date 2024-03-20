import React,{useState} from 'react'
import './Admin.css'
import { Link } from 'react-router-dom';
export default function Admin() {
    const [selectedOption, setSelectedOption] = useState('venue');

  return (

    <div className="admin-page">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={() => setSelectedOption('venue')}><Link to='/adminvenue'>Venue</Link></li>
          <li onClick={() => setSelectedOption('gallery')}><Link to='/admingallery'>Gallery</Link></li>
          <li onClick={() => setSelectedOption('price')}><Link to='/adminprice'>Price</Link></li>
        </ul>
      </div>
      <div className="admin-content">
        {selectedOption === 'venue' && (
          <div>
            
            
          </div>
        )}
        {selectedOption === 'gallery' && (
          <div>
            
            {/* Add your gallery management functionality here */}
          </div>
        )}
        {selectedOption === 'price' && (
          <div>
            <h2>Price Management</h2>
            {/* Add your price management functionality here */}
          </div>
        )}
      </div>
    </div>
    
  )
}
