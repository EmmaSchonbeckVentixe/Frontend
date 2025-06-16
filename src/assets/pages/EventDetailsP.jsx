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
            <h1>{event.title}</h1>
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