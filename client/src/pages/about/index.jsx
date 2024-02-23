import React from 'react'
import './index.scss'
import About_swiper from '../../components/about_swiper'
import Map from '../../components/map'
function About() {
    return (
        <>
        <div id='about'>
            <div className="container">
                <div className="titlew">
                    <div className="up">We'd Love To</div>
                    <div className="down">See You Smile</div>
                </div>
                <div className="info_img">
                    <div className="info">Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities.
                        Appropriately communicate one-to-one technology after plug-and-play networks. Quickly aggregate B2B users and worldwide potentialities.
                        Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.
                        Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline.
                    </div>
                    <div className="img">
                        <img src="https://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/01/post-10-1536x1024.jpg" alt="" />
                    </div>
                </div>
                <div className="swi">
                    <About_swiper></About_swiper>
                </div>
            </div>
        </div>
            <Map></Map>
        </>

    )
}

export default About