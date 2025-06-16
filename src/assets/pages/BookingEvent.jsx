import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const BookingEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    eventId: id,
    firstName: '',
    lastName: '',
    email: '',
    streetName: '',
    postalCode: '',
    city: '',
    ticketQuantity: 1
  })

  useEffect(() => {
    getEvents()
  }, [])
          
  const getEvents = async () => {
    try {
      const res = await fetch(`https://ee-eventservice-ewfjbzhzbrerd7bw.swedencentral-01.azurewebsites.net/api/Events/${id}`)
      if (!res.ok) throw new Error('Failed to fetch server')

      const data = await res.json()
      setEvent(data.result)
    } catch (err) {
      console.error(err)
    }
  }

  const postBooking = async () => {
    try {
      const res = await fetch(`https://ee-bookingservice-ewfjbzhzbrerd7bw.swedencentral-01.azurewebsites.net/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        console.error('Booking failed')
        alert("Something went wrong while booking. Please try again.");
        return false;
      } else {
        console.log('Booking successful')
        return true;
      }
    } catch (err) {
      console.error('Error submitting booking', err)
      alert("Something went wrong while booking. Please try again.");
      return false;
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const success = await postBooking();
    if (success) {
      setIsSubmitted(true);
    }
  };

    return (
      <div className='booking-container'>
        <h1>Book Event - {event.title}</h1>
        <div>
          <form onSubmit={handleSubmit} noValidate>
            <div className='input-field'>
              <label>First Name</label>
              <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className='input-field'>
              <label>Last Name</label>
              <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className='input-field'>
              <label>E-mail</label>
              <input type='email' name='email' value={formData.email} onChange={handleChange} required />
            </div>
            <div className='input-field'>
              <label>Street Name</label>
              <input type='text' name='streetName' value={formData.streetName} onChange={handleChange} required />
            </div>
            <div className='input-field'>
              <label>Postal Code</label>
              <input type='text' name='postalCode' value={formData.postalCode} onChange={handleChange} required />
            </div>
            <div className='input-field'>
              <label>City</label>
              <input type='text' name='city' value={formData.city} onChange={handleChange} required />
            </div>
            <div className='input-field'>
              <label>Select Package</label>
              <select name="packageId" value={formData.packageId || ''} onChange={handleChange} required>
                <option value="">Select a package</option>
                {event.packages?.map(pkg => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.title} (${pkg.price})
                  </option>
                ))}
              </select>
            </div>
            <button className='btn-submit-booking' type='submit'>Book now</button>
          </form>
          {isSubmitted && (
            <div className="confirmation-text">
              <p>Your booking was successful</p>
              <Link to="/" className="back-home-button">Back to events</Link>
            </div>
          )}
        </div>
      </div>
    )
}

export default BookingEvent;