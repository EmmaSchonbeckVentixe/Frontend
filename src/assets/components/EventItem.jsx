import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({ item }) => {
    return (
        <Link to={`/${item.id}`}>
            <div className='event-card'>
                <div>
                    <img className='img-eventcard' src="/Images/Eventlist/imgPlaceholder.jpeg" alt="Image placeholder" />
                </div>
                <div>{item.title}</div>
            </div>
        </Link>
    )
}

export default EventItem