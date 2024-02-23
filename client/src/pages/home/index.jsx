import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/header'
import Small_icon from '../../components/smal_icon'
import User_commet from '../../components/user_commet'
import Filter_img from '../../components/filter_img'
import Map from '../../components/map'

function Home() {
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <div>
        <Header></Header>
        <Small_icon></Small_icon>
        <User_commet></User_commet>
        <Filter_img></Filter_img>
        <Map></Map>
      </div>
    </>
  )
}

export default Home