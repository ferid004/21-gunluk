import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import './index.scss';




// return (

// )


export default function User_commet() {

    const [user_comme, setuser_comme] = useState([])
    const get_user_co = async () => {
        const res = await axios.get('http://localhost:3000/user')
        const data = res.data.data
        setuser_comme(data)
        console.log('asassa', data);
    }
    useEffect(() => {
        get_user_co()
    }, [])



    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };

    return (
        <>
            <div id='UserComment'>
                <div className="container">
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={false}
                        spaceBetween={30}
                        pagination={{
                            type: 'fraction',
                        }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{ // Breakpoints ekleyerek responsif hale getiriyoruz
                            1200: {
                                slidesPerView: 3, // 1200px genişliğinde 2 slayt göster
                            },
                            600: {
                                slidesPerView: 2, // 600px genişliğinde sadece 1 slayt göster
                            },
                            0: {
                                slidesPerView: 1, // 600px genişliğinde sadece 1 slayt göster
                            },
                            
                        }}
                    >
                        {user_comme && user_comme.map((item) => (
                            item.info ? (
                                <div key={item._id} >

                                    <SwiperSlide>
                                        <div className="box">
                                            <div className="up">
                                                <div className="src"><img src={item.image} alt="" /></div>
                                                <div className="name">{item.username}</div>
                                            </div>
                                            <div className="info">{item.info}</div>
                                        </div>

                                    </SwiperSlide>
                                </div>
                            ) : null
                        ))}
                    </Swiper>
                </div>
            </div>


        </>
    );
}

