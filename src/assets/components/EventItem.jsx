import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({ item }) => {
    return (
        <Link to={`/${item.id}`} className="event-link">
            <div className='event-card'>
                <div>
                    <img className='img-eventcard' src="/Images/Eventlist/imgPlaceholder.jpeg" alt="Image placeholder" />
                </div>
                <div className='event-information'>
                    <div className='event-date-time'>
                        <p>June 5, 2029 - 3:00 PM</p>
                    </div>
                    <div className='event-title'>
                        {item.title}
                    </div>
                    <div className='event-location'>
                        <p>Rocky Ridge Exhibition Hall, Denver, CO</p>
                    </div>
                    <div className='event-price'>
                        <p>40$</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventItem