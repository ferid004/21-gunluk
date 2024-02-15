import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './index.scss'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate();

    const [message, setMessage] = useState('');

    const PostData = async (data) => {
        try {
            await axios.post('http://localhost:3000/user/register', data)
            navigate('/login');
        } catch (error) {
            console.log(error);
            setMessage(error.response.data);
        }
    }
    return (
        <div id='register'>
            <div className="title">
                Register
            </div>
            <>
                <Formik
                    initialValues={{ username: '', password: '', }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .required('Required'),
                        password: Yup.string()
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        PostData(values)
                        resetForm()
                    }}
                >
                    <Form className='form'>
                        <label htmlFor="username">UserName</label>
                        <Field name="username" type="text" />
                        <ErrorMessage name="username" />

                        <label htmlFor="password">Password</label>
                        <Field name="password" type="text" />
                        <ErrorMessage name="password" />
                        <button type="submit">Qeydiyatdan keç</button>
                    </Form>
                </Formik>
                <p>{message}</p>

                <p>Əgər Qeydiyatınız varsa  Login olun !</p>
                <div className="link">
                    <NavLink to={'/login'}>Login ol</NavLink>
                </div>
            </>
        </div>
    )
}

export default Register