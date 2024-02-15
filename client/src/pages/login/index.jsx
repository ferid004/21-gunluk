import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useUser } from '../../context/userContext';
import { jwtDecode } from "jwt-decode";
import './index.scss';
import { NavLink, useNavigate } from 'react-router-dom';


function Login() {
  const [message, setMessage] = useState('');
  const { User, LoginUser } = useUser();
  const navigate = useNavigate();

  const PostData = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/user/login', data);
      console.log(res.data);
      setMessage(res.data.message);

      const decodedToken = jwtDecode(res.data.data);
      console.log(decodedToken);
      LoginUser(decodedToken);

      navigate('/');
    } catch (error) {
      setMessage(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div id='login'>
      <div className='title'>Login Olun </div>

      <>
        {!User ? (
          <Formik
            initialValues={{ username: '', password: '', }}
            validationSchema={Yup.object({
              username: Yup.string().required('Required'),
              password: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              PostData(values);
              resetForm();
            }}
          >
            <Form className='form'>
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" />
              <ErrorMessage name="username" />

              <label htmlFor="password">Password</label>
              <Field name="password" type="text" />
              <ErrorMessage name="password" />

              <button type="submit">Login</button>
            </Form>
          </Formik>
        ) : (
          <p>istifadeci düzgün giriş etdiyi təqdirdə</p>
        )}
      </>

      <p>{message}</p>

      <p>Əgər logininiz yoxdusa Qeydiyyatdan keçin</p>
      <div className="link">
        <NavLink to={'/register'}>Qeydiyyatdan keç!</NavLink>
      </div>
    </div>
  );
}

export default Login;


