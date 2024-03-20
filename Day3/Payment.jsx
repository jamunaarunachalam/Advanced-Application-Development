import React from 'react'
import './Payment.css'
export default function Payment() {
  return (
    <div>
    <div className='pay'></div>
    <div className="payment-form">
      <h2 className="form-title"> Payment</h2>
      <form className="form">
        <div className="form-group">
          
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          
          <input type="text" id="card-number" placeholder="Enter your card number" required />
        </div>
        <div className="form-group">
          
          <input type="text" id="expiry" placeholder="MM/YYYY" required />
        </div>
        <div className="form-group">
          
          <input type="text" id="cvv" placeholder="Enter CVV" required />
        </div>
        <button type="submit" className="btn">Pay Now</button>
      </form>
    </div>
    </div>
  )
}
