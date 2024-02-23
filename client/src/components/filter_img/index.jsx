import React from 'react'
import ReactCompareImage from 'react-compare-image';
import './index.scss';
function Filter_img() {
    return (
        <div id='filter_img'>
            <div className="container">

                <div className="title">
                    <h3>Healthy Smile</h3>
                    <div className="info">Teeth whitening is one of the quickest ways to improve your smile. Many patients are amazed that one trip to DentiCare can change their teeth dramatically.</div>
                </div>
                <div className='f_img'>
                    <ReactCompareImage leftImage="https://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/02/teeth-before-2.jpg"
                        rightImage="https://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/02/teeth-after-2.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Filter_img