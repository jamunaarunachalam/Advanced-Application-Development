import React,{useState} from 'react'
import './Bookings.css'
export default function Booking() {
    const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [decoration, setDecoration] = useState('');
  const [colorTheme, setColorTheme] = useState('');
  const [foodPreference, setFoodPreference] = useState('');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <div>
    <div className='book'></div>
    <div className="booking-container">
    <h2>Booking Page</h2>
    <form onSubmit={handleBookingSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Number of People"
        value={peopleCount}
        onChange={(e) => setPeopleCount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Color Theme"
        value={colorTheme}
        onChange={(e) => setColorTheme(e.target.value)}
        required
      />
      <select
        value={decoration}
        onChange={(e) => setDecoration(e.target.value)}
        required
      >
        <option value="">Select Decoration</option>
        <option value="Simple">Simple</option>
        <option value="Medium">Medium</option>
        <option value="Luxury">Luxury</option>
      </select>
      <select
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        required
      >
        <option value="">Select Venue</option>
        <option value="Luminary">Luminary</option>
        <option value="Grandeur">Grandeur</option>
        <option value="Magnate">Magnate</option>
      </select>
      
      <select
        value={foodPreference}
        onChange={(e) => setFoodPreference(e.target.value)}
        required
      >
        <option value="">Select Food Preference</option>
        <option value="Veg">Vegetarian</option>
        <option value="NonVeg">Non-Vegetarian</option>
        <option value="Both">Both</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div className='bookingquote'>Elegant Celebrations, Endless Memories</div>
    </div>
  )
}
