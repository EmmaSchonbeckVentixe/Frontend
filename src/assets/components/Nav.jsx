import React from 'react'

const Nav = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar'>
        <div className='logo-ventixe'>
          <img src="/Images/Nav/Symbol.svg" alt="Ventixe logotype" />
          <p>Ventixe</p>
      </div>
      <div className='navlinks'>
        <img src="/Images/Nav/Ticket.svg" alt="Event symbol" />
        <p>Events</p>
      </div>
      </div>
    </div>
  )
}

export default Nav;