import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({ item }) => {
    return (
        <Link to={`/events/${item.id}`} className="event-link">
            <div className='event-card'>
                <div>
                    <img className='img-eventcard' src="/Images/Eventlist/imgPlaceholder.jpeg" alt="Image placeholder" />
                </div>
                <div className='event-information'>
                    <div className='event-date-time'>
                        {item.eventDate}
                    </div>
                    <div className='event-title'>
                        {item.title}
                    </div>
                    <div className='event-location'>
                        {item.location}
                    </div>
                    <div className='event-price'>
                        <p>40$</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventItem;