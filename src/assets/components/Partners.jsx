import React from 'react'

const Partners = () => {
  return (
    <div className='partners-wrapper'>
      <div className='partners-header'>
        <h3>Our Partners</h3>
        <img src="/Images/Packages/DotsThree.svg" alt="Three dots icon" />
      </div>
        <div className='partners-flex'>
          <div className='partners-content'>
          <img src="/Images/Partners/Logoipsum-logo1.svg" alt="" />
          <img src="/Images/Partners/Logoipsum-logo2.svg" alt="" />
          <img src="/Images/Partners/Logoipsum-logo3.svg" alt="" />
          <img src="/Images/Partners/Logoipsum-logo4.svg" alt="" />
        </div>
  
        <div className='partners-content row2'>
          <img src="/Images/Partners/Logoipsum-logo5.svg" alt="" />
          <img src="/Images/Partners/Logoipsum-logo6.svg" alt="" />
          <img src="/Images/Partners/Logoipsum-logo7.svg" alt="" />
          <img src="/Images/Partners/Logoipsum-logo8.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partners;