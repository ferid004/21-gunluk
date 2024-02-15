import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
function Shop() {
    const [product, setProduct] = useState([])

    const get_product = async () => {
        const res = await axios.get('http://localhost:3000/product')
        setProduct(res.data.data)
    }
    useEffect(() => {
        get_product();
    }, [])

    return (
        <div id='shop'>
            <div className="container">
                <div className="title">
                    <h2>Xeyrli Alışverişlər</h2>

                </div>
                <div className="bigbox">
                    {product && product.map((item) => (
                        <div key={item._id} className="pro">
                            <div className="name">{item.name}</div>
                            <div className="info">{item.info}</div>
                            <div className="src">{item.src}</div>
                            <div className="price">{item.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop