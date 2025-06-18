import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar'>
        <div className='logo-ventixe'>
          <img src="/Images/Nav/Symbol.svg" alt="Ventixe logotype" />
          <p>Ventixe</p>
        </div>
        <NavLink 
          to="/" 
          end
          className={({ isActive }) =>
            isActive ? 'navlinks active' : 'navlinks'
          }
        >
          {({ isActive }) => (
            <div className={`navlink-button-img ${isActive ? 'active' : ''}`}>
              <img src="/Images/Nav/Ticket.svg" alt="Event symbol" />
              <p>Events</p>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  )
}

export default Nav;