import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

import './index.scss'

export default function Header() {
  const [header, setHeader] = useState([])
  const [loading, setLoading] = useState(false)
  const get_header = async () => {
    const res = await axios.get('http://localhost:3000/header')
    const data = res.data.data
    setHeader(data)
    console.log(data);
    setLoading(true)
  }
  useEffect(() => {
    get_header()
  }, [])
  return (
    <div id='header'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {loading ? header && header.map((item) => (
          <div className="swip" key={item._id}>
            <SwiperSlide><img src={item.src} alt="" /></SwiperSlide>
          </div>
        )) :
          <div className='loadingcss'>
            <div className="loader"></div>
          </div>
        }
      </Swiper>
    </div>
  );
}
