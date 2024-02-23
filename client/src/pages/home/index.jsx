import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/header'
import Small_icon from '../../components/smal_icon'

function Home() {
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <div>
        <Header></Header>
        <Small_icon></Small_icon>
      </div>
    </>
  )
}

export default Home