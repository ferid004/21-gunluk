import React from 'react'

function Map() {
    return (
        <div>
            <iframe
                title="Harita"
                width="100%"
                height="250"
                loading="eager"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12072.273399293024!2d-122.08424935!3d37.42200590000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807b6ff0bfbf%3A0x7b5b65baf9b6d4d8!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1625180594288!5m2!1sen!2sus"
            ></iframe>
        </div>
    )
}

export default Map