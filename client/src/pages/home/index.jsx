import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/header'

function Home() {
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <div>
        <Header></Header>
      </div>
    </>
  )
}

export default Home