import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Terms from '../components/Terms';
import Packages from '../components/Packages';
import Partners from '../components/Partners';
import EventDetailsHeader from '../components/EventDetailsHeader';

const EventDetails = () => {
    const { id } = useParams()

    const [event, setEvent] = useState({})
    
    const getEvents = async () => {
      const res = await fetch(`https://ee-eventservice-ewfjbzhzbrerd7bw.swedencentral-01.azurewebsites.net/api/Events/${id}`)
      if (res.ok) {
        const response = await res.json()
        setEvent(response.result)
      }
    }
    
    useEffect(() => {
      getEvents()
    }, [])

  return (
    <div className='event-details'>
      <Nav />
      <EventDetailsHeader />
      <main className='main-content'>
          <div className='event-card event-details'>
            <img className='img-eventcard details' src="/Images/Eventlist/imgPlaceholder.jpeg" alt="Image placeholder" />
            <h1>{event.title}</h1>
            <div className='event-date-time'>
              <img src="/Images/EventDetails/CalendarDot.svg" alt="Calendar icon" />
              <p>{event.eventDate}</p>
            </div>
            <div className='event-location'>
              <img src="/Images/EventDetails/MapPin.svg" alt="Map pin icon" />
              <p>{event.location}</p>
            </div>
            <div className='description'>
              <h5>About event</h5>
              <p>{event.description}</p>
            </div>
            <Link to={`/events/booking/${id}`}>Book Event</Link>
          </div>
          <div className='terms-list'>
            <Terms />
          </div>
          <div className='packages'>
            <Packages />
          </div>
          <div className='partners'>
            <Partners />
          </div>
      </main>
      <Footer />
    </div>
  )
}

export default EventDetails;