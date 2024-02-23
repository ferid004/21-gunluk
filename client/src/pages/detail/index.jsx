import React, { useEffect, useState } from 'react'
import './index.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'
function Detail() {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const axiosAll = async () => {
        const res = await axios.get(`http://localhost:3000/product/${id}`)
        const data = res.data.data
        setProduct(data)
        // console.log(data);
    }
    useEffect(() => {
        axiosAll()
    }, [])
    return (
        <div id='detail'>
            <Helmet>
                <title>detail</title>
            </Helmet>
            <div className="container">
                {product && (
                    <div className='box' key={product._id}>
                        <div><div className='imgbox'><img src={product.src} alt="" /></div></div>
                        <div className="text">
                        <div className='name'>name: {product.name}</div>
                        <div className='info'>info: {product.info}</div>
                        <div className='price'>price: ${product.price}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Detail