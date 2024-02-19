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
                    <ul className='box' key={product._id}>
                        <li className='p'>name: {product.name}</li>
                        <li><div className='imgbox'><img src={product.src} alt="" /></div></li>
                        <li className='p'>info: {product.ifno}</li>
                        <li><button onClick={() => handlewish(product)}>wish</button></li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Detail