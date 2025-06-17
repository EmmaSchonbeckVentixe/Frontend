import React from 'react'


const Packages = () => {
  return (
    <div className='packages card'>
      <div className='packages-title'>
           <h4>Packages</h4> 
           <img src="/Images/Packages/DotsThree.svg" alt="Three dots icon" />
      </div>
      <div className='packages-content'>
            <div className='package-card'>
                  <h5>General Admission Package</h5>
                  <span className='package-price'>$50</span>
                  <div className='package-wrapper'>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Standing</p>
                        </div>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Access to Festival Grounds</p>
                        </div>
                  </div>
            </div>

            <div className='package-card'>
                  <h5>Silver Package</h5>
                  <span className='package-price'>$70</span>
                  <div className='package-wrapper'>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Seating</p>
                        </div>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Mid-tier View</p>
                        </div>
                  </div>
            </div>

            <div className='package-card'>
                  <h5>Gold Package</h5>
                  <span className='package-price'>$85</span>
                  <div className='package-wrapper'>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Seating</p>
                        </div>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Prime View</p>
                        </div>
                  </div>
            </div>

            <div className='package-card'>
                  <h5>Platinum Package</h5>
                  <span className='package-price'>$100</span>
                  <div className='package-wrapper'>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Seating</p>
                        </div>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Near Stage</p>
                        </div>
                  </div>
            </div>

            <div className='package-card'>
                  <h5>Diamond Package</h5>
                  <span className='package-price'>$120</span>
                  <div className='package-wrapper'>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Seating</p>
                        </div>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Front-Row View</p>
                        </div>
                  </div>
            </div>

            <div className='package-card'>
                  <h5>VIP Lounge Package</h5>
                  <span className='package-price'>$150</span>
                  <div className='package-wrapper'>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Seating</p>
                        </div>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Exclusive Lounge</p>
                        </div>
                  </div>
            </div>

            <div className='package-card'>
                  <h5>Artist Meet-and-Greet Package</h5>
                  <span className='package-price'>$180</span>
                  <div className='package-wrapper'>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Standing</p>
                        </div>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Backstage Access</p>
                        </div>
                  </div>
            </div>

            <div className='package-card'>
                  <h5>Ultimate Access Package</h5>
                  <span className='package-price'>$200</span>
                  <div className='package-wrapper'>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>Standing</p>
                        </div>
                        <div className='package-info'>
                              <img src="/Images/Packages/CheckCircle.svg" alt="Checkmark" />
                              <p>All-Inclusive Benefits</p>
                        </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Packages;