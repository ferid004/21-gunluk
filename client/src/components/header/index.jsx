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

export default function Header() {
    const [header, setHeader] = useState([])
    const get_header = async () => {
      const res = await axios.get('http://localhost:3000/header')
      const data = res.data.data
      setHeader(data)
      console.log(data);
    }
    useEffect(() => {
      get_header()
    }, [])
  return (
    <>
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
        {header && header.map((item)=>(
            <div className="" key={item._id}>
                <SwiperSlide><img src={item.src} alt="" /></SwiperSlide>
            </div>
        ))}
      </Swiper>
    </>
  );
}
