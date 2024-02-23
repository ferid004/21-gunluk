import AOS from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Box_1 from '../box_1';
function Aoss() {
    useEffect(() => {
        AOS.init();
    }, [ AOS.init()]);
    return (

        <div data-aos="zoom-out-down">
            <Box_1></Box_1>
        </div>
    )
}

export default Aoss