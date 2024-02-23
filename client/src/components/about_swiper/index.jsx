import icon_1 from '../../img/small_icons/Screenshot 2024-02-22 182208.png'
import icon_2 from '../../img/small_icons/Screenshot 2024-02-22 182233.png'
import icon_3 from '../../img/small_icons/Screenshot 2024-02-22 182248.png'
import icon_4 from '../../img/small_icons/Screenshot 2024-02-22 182306.png'
import icon_5 from '../../img/small_icons/Screenshot 2024-02-22 182312.png'
import icon_6 from '../../img/small_icons/Screenshot 2024-02-22 182321.png'
import icon_7 from '../../img/small_icons/Screenshot 2024-02-22 182337.png'
import icon_8 from '../../img/small_icons/Screenshot 2024-02-22 182353.png'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.scss'
function About_swiper() {
    
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
        <div id='ab'>
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
                    1000: {
                        slidesPerView: 3, // 1200px genişliğinde 2 slayt göster
                    },
                    400: {
                        slidesPerView: 2, // 600px genişliğinde sadece 1 slayt göster
                    },
                    0: {
                        slidesPerView: 1, // 600px genişliğinde sadece 1 slayt göster
                    },

                }}
            >
                <SwiperSlide>
                    <div className='box1212'>
                        <div className="imgboxx1212">
                            <img src={icon_1} alt="" />
                        </div>
                        <div className="text1212">
                            <div className="title1212">General Dentistry</div>
                            <div className="info1212">Competently parallel task researched data process.</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='box1212'>
                <div className="imgboxx1212">
                    <img src={icon_2} alt="" />
                </div>
                <div className="text1212">
                    <div className="title1212">Implants</div>
                    <div className="info1212">Leverage other resource leveling convergence data.</div>
                </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='box1212'>
                <div className="imgboxx1212">
                    <img src={icon_3} alt="" />
                </div>
                <div className="text1212">
                    <div className="title1212">Dental Surgery</div>
                    <div className="info1212">Engage fully tested process top line platform clients.</div>
                </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='box1212'>
                <div className="imgboxx1212">
                    <img src={icon_4} alt="" />
                </div>
                <div className="text1212">
                    <div className="title1212">Alignment</div>
                    <div className="info1212">User generated content in real time offshoring.</div>
                </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='box1212'>
                <div className="imgboxx1212">
                    <img src={icon_5} alt="" />
                </div>
                <div className="text1212">
                    <div className="title1212">
Teeth Braces</div>
                    <div className="info1212">Synthesize integrated schemas with networks.</div>
                </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='box1212'>
                <div className="imgboxx1212">
                    <img src={icon_6} alt="" />
                </div>
                <div className="text1212">
                    <div className="title1212">
Whitening</div>
                    <div className="info1212">Incubate standards great channels scalable benefits.</div>
                </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='box1212'>
                <div className="imgboxx1212">
                    <img src={icon_7} alt="" />
                </div>
                <div className="text1212">
                    <div className="title1212">Teeth Protection</div>
                    <div className="info1212">Evisculate holistic innovation rather than centric data.</div>
                </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='box1212'>
                <div className="imgboxx1212">
                    <img src={icon_8} alt="" />
                </div>
                <div className="text1212">
                    <div className="title1212">
Prosthesis</div>
                    <div className="info">Revolutionize global sources through dental services.</div>
                </div>
            </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default About_swiper