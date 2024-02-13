import React from 'react'
import './index.scss'

import titimg from '../../img/denticare-logo-inv.png'
import { NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <div id='navbar'>
      <div className="container">
        <div className="dev">
          <div className="left">
            <div className="title">
              <div className="tit_img">
                <img src={titimg} alt="" />
              </div>
              <div className="name">
                <p>UĞUR</p>
              </div>
            </div>
            <div className="links">
              <div className="link">
                <NavLink to={'/'}>Home</NavLink>
              </div>
              <div className="link">
                <NavLink to={'/about'}>About</NavLink>
              </div>
              <div className="link">
                <NavLink to={'/contact'}>Contact</NavLink>
              </div>
              <div className="link">
                <NavLink to={'/admin'}>Portfoli</NavLink>
              </div>
              <div className="link">
                <NavLink to={'/shop'}>Shop</NavLink>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="icons">
              <div className="icon"  >
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="icon">
                <i className="fa-solid fa-basket-shopping"></i>
              </div>
              <div className="icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="icon">
                <i className="fa-solid fa-basket-shopping"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar