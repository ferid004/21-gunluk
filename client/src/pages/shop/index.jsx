import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import { useUser } from '../../context/userContext'
import { Link } from 'react-router-dom'
function Shop() {
    ///
    const { User, setUser, LoginUser, addbasket } = useUser()

    ///
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
            <div className="for_titile">
                <div className="title">
                    <div className="box_for_position">
                        <div className="text">
                            <h2>Xeyrli Alışverişlər</h2>
                            <p>Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with distinctive quality vectors. Globally revolutionize global sources through interoperable services.</p>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="bigbox">
                        {product && product.map((item) => (
                            <div key={item._id} className="pro">
                                <div className="src">
                                    <img src={item.src} alt="" />
                                </div>
                                <div className="line"></div>
                                
                                <div className="down">
                                    <div className="name">{item.name}</div>
                                    <div className="info">{item.info}</div>
                                    <div className="price">$ {item.price}</div>
                                    <div className="buton">
                                        <button className='custom-btn btn-9' onClick={() => addbasket(item)}>Add basket</button>
                                        <button className='custom-btn btn-9' >Wish List</button>
                                        <Link to={`/detail/${item._id}`}>

                                        <button className='custom-btn btn-9'  >detail</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop