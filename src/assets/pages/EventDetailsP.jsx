import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

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
      <h1>{event.title}</h1>    
      <Link to={`/events/booking/${id}`}>Book Event</Link>
    </div>
  )
}

export default EventDetails