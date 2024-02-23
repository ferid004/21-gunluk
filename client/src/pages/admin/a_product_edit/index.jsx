import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import './index.scss'

function Product_edit() {
    const [product, setProduct] = useState([])
    const get_product = async () => {
        const res = await axios.get('http://localhost:3000/product')
        const data = res.data.data
        setProduct(data)
        console.log(data);
    }
    useEffect(() => {
        get_product()
    }, [])
    const axiosDelete = async (id) => {
        await axios.delete(`http://localhost:3000/product/${id}`)
        get_product()
    }
    const post_Product = async (data) => {
        await axios.post(`http://localhost:3000/product/`, data)
        get_product()
    }





    ///
    const truncateInfo = (info, maxLength) => {
        if (info.length > maxLength) {
            return info.substring(0, maxLength) + '...';
        }
        return info;
    }

    return (
        <div id='product_edit'>
            <div className="container">
                <div className="text">
                    <p>Product  edit</p>
                </div>
                <div className="formikk">
                    <Formik
                        initialValues={{ name: '', info: '', price: '', src: '' }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required('Required'),
                            info: Yup.string()
                                .required('Required'),
                            price: Yup.number()
                                .required('Required'),
                            src: Yup.string()
                                .required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            post_Product(values)
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                resetForm()
                            }, 400);
                        }}
                    >
                        <Form className='form'>
                            <label htmlFor="name">name</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" />
                            <label htmlFor="info">info</label>
                            <Field name="info" type="text" />
                            <ErrorMessage name="info" />
                            <label htmlFor="price">price</label>
                            <Field name="price" type="number" min={1} />
                            <ErrorMessage name="price" />
                            <label htmlFor="src">src</label>
                            <Field name="src" type="text" />
                            <ErrorMessage name="src" />
                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
                <div className="bigbox">
                    {product && product.map((item) => (
                        <div key={item._id} className="pro">
                            <div className="src">
                                <img src={item.src} alt="" />
                            </div>
                            <div className="line"></div>

                            <div className="down">
                                <div className="name">{item.name}</div>
                                <div className="info">{truncateInfo(item.info, 32)}</div>
                                <div className="price">$ {item.price}</div>
                                <div className="buton">
                                    <button className='custom-btn btn-9' onClick={() => axiosDelete(item._id)}>delete</button>
                                    {/* <button className='custom-btn btn-9' onClick={() => addwish(item)} >Wish List</button>
                                    <Link to={`/detail/${item._id}`}>
                                        <button className='custom-btn btn-9'  >detail</button>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product_edit