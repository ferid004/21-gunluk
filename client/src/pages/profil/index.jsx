import React, { useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import './index.scss'
import { useUser } from '../../context/userContext'
import Login from '../login'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Profil() {
    ///
    const { User, setUser, LoginUser } = useUser()
    console.log(User);
    ///
    const navigate = useNavigate();
    useEffect(() => {
        if (!User) {
            navigate('/login');
        }
    }, [User, navigate]); 

    //
    const [showForm_name, setShowForm_name] = useState(false);
    const toggleForm_name = () => setShowForm_name(!showForm_name);
    const [showForm_info, setShowForm_info] = useState(false);
    const toggleForm_info = () => setShowForm_info(!showForm_info);
    const [showForm_img, setShowForm_img] = useState(false);
    const toggleForm_img = () => setShowForm_img(!showForm_img);
    //

    const UpdateUserName = async (values) => {
        try {
            const res = await axios.put(`http://localhost:3000/user/username/${User.userId}`, { username: values.username });
            console.log("UpdateImage response:", res);
            setShowForm_name(false)
        } catch (error) {
            console.error("Error updating username:", error.response.status, error.response.data);
        }
    };
    const UpdateImage = async (values) => {
        try {
            const res = await axios.put(`http://localhost:3000/user/image/${User.userId}`, { image: values.image });
            console.log("UpdateImage response:", res);
            setShowForm_img(false);
        } catch (error) {
            console.error("Error updating image:", error.response.status, error.response.data);
        }
    };
    const UpdateInfo = async (values) => {
        try {
            const res = await axios.put(`http://localhost:3000/user/info/${User.userId}`, { info: values.info });
            console.log("UpdateImage response:", res);
            setShowForm_info(false);
            } catch (error) {
            console.error("Error updating info:", error.response.status, error.response.data);
        }
    };

    return (
        <div id='profil'>
            <div className="container">

                {User ? <>
                <div className="left">
                    <div className="img_name">
                        <div className='u_name'>Profil name: {User.username}</div>
                        <div className='u_img'>
                            <img src={User.image} alt="" />
                        </div>
                    </div>
                    <div className="info">
                        <p className='t_info'>
                        Sizin rəyiniz
                        </p>
                        <p className='u_info'>
                        {User.info}
                        
                        </p>
                    </div>
                </div>
                <div className="right">
                    <h2>
                        Profil düzənlə
                    </h2>
                    <div className="username_edit">
                        <div className='u_username'>
                          Istifadəçi adını dəyişin 
                        </div>
                        <>
                        <button className='btn' onClick={toggleForm_name}>+</button>
                                {showForm_name && (
                            <Formik
                                initialValues={{ username: '', }}
                                validationSchema={Yup.object({
                                    username: Yup.string()
                                })}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    console.log("Submitting with values:", values.username);
                                    UpdateUserName(values);
                                    resetForm();
                                    setSubmitting(false);
                                }}
                            >
                                <Form className='form'>
                                    <Field name="username" type="text" />
                                    <ErrorMessage name="username" />

                                    <button type="submit">Dəyişikliyi əlavə et</button>
                                </Form>
                            </Formik>
                              )}
                        </>
                    </div>
                    <div className="info_edit">
                        <div className='u_info'>
                            Yeni  rəy daxil edin
                        </div>
                     
                        <>
                        <button className='btn' onClick={toggleForm_info}>+</button>
                                {showForm_info && (
                            <Formik
                                initialValues={{ info: '', }}
                                validationSchema={Yup.object({
                                    info: Yup.string()
                                })}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    console.log("Submitting with values:", values.info);
                                    UpdateInfo(values);
                                    resetForm();
                                    setSubmitting(false);
                                }}
                            >
                                <Form className='form'>
                                    <Field name="info" type="text" />
                                    <ErrorMessage name="info" />

                                    <button type="submit">Dəyişikliyi əlavə et</button>
                                </Form>
                            </Formik>
                              )}
                        </>
                    </div>

                    <div className="edit_img">
                        <div className='u_img'>Profil şəklini dəyişin</div>
                        <>
                        <button className='btn' onClick={toggleForm_img}>+</button>
                                {showForm_img && (
                            <Formik
                                initialValues={{ image: '', }}
                                validationSchema={Yup.object({
                                    image: Yup.string()
                                })}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    console.log("Submitting with values:", values.image);
                                    UpdateImage(values);
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                        resetForm();
                                    }, 400);
                                }}
                            >
                                <Form className='form'>
                                    <Field name="image" type="text" />
                                    <ErrorMessage name="image" />

                                    <button type="submit">Dəyişikliyi əlavə et</button>
                                </Form>
                            </Formik>
                              )}
                        </>
                    </div>
                </div>

                </>
                // burda login sayfasını çağırmak yerine login sayfasına gitmek istiyorum
            
                    : <Login></Login>
                }
            </div>
        </div>
    )
}

export default Profil