import React from 'react'
import './index.scss'

function Footer() {
  return (
    <div id='footer'>
      <div className="container">
        <div className="dev">
          <div className="left">
            <div className="box1">
              <div className="upbox">
                <img src="https://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/01/denticare-logo-footer.png" alt="" />
              </div>
              <div className="downbox">
                <p>We’re a friendly team of dentists working together to ensure that you receive the best treatment that you require.</p>
              </div>
            </div>
            <div className="box2">
              <div className="upbox">
                <h3 className='titillium-web-regular '>About DentiCare</h3>
              </div>
              <div className="boxdown">
                <div className="boxleft">
                  <p>Our Dental</p>
                  <p>Team</p>
                  <p>Our Awards</p>
                  <p>Dental Services</p>
                </div>
                <div className="boxright">
                  <p>Pricing &</p>
                  <p>Pricelist</p>
                  <p>Our Solutions</p>
                  <p>Clients</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="right">
          <div className="box3">
              <div className="up">
                <h3>Our Awards</h3>
              </div>
              <div className="down">
                <img src="https://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/01/footer-awards.png" alt="" />
              </div>
            </div>
            <div className="box4">
              <div className="up">
                <h3>Social Networks</h3>
              </div>
              <div className="down">
                <p>Visit DentiCare on these social links.</p>
                <div className="icons">
                  <div className="icon">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-x-twitter"></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer