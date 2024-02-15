import React from 'react'
import './index.scss'

import titimg from '../../img/denticare-logo-inv.png'
import { Link, NavLink } from 'react-router-dom'
import { useUser } from '../../context/userContext'



function Navbar() {

  const { User, setUser, LoginUser } = useUser()

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
                <NavLink onClick={User ? () => setUser(null) : () => null} to={'/login'}>{User ? 'Log Out' : 'Login'}</NavLink>
              </div>
              {User && User.role === "admin" ? <div className="link">
                <NavLink to={"/admin"}>Admin</NavLink>
              </div> : ''}
              <div className="link">
                <NavLink to={'/shop'}>Shop</NavLink>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="icons">
              <div className="icon"  >
                <NavLink to={'/profil'}>
                  <i className="fa-solid fa-user"></i>
                </NavLink>
              </div>
              <div className="icon">
                <i className="fa-solid fa-basket-shopping"></i>
              </div>
              <div className="icon">
                <i className="fa-solid fa-heart"></i>
              </div>
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
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar