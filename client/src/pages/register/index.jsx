import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './index.scss'
import axios from 'axios'
function Register() {
    const PostData = async (data) => {
       try {
         await axios.post('http://localhost:3000/user/register', data)
       } catch (error) {
        console.log(error);
       }
    }
    return (
        <div id='register'>Register
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
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            resetForm()
                        }, 400);
                    }}
                >
                    <Form className='form'>
                        <label htmlFor="username">First Name</label>
                        <Field name="username" type="text" />
                        <ErrorMessage name="username" />

                        <label htmlFor="password">Last Name</label>
                        <Field name="password" type="text" />
                        <ErrorMessage name="password" />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </>
        </div>
    )
}

export default Register