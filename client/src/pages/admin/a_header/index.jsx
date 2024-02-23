import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import './index.scss';

function Admin_header() {
const [loading, setLoading] = useState(false)
  ///// header
  const [header, setHeader] = useState([])
  const get_header = async () => {
    const res = await axios.get('http://localhost:3000/header')
    const data = res.data.data
    setHeader(data)
    console.log(data);
    setLoading(true)
  }
  useEffect(() => {
    get_header()
  }, [])

  const post_header = async (data) => {
    await axios.post(`http://localhost:3000/header/`,data)
    get_header()
  }
  const del_header = async (id) => {
    await axios.delete(`http://localhost:3000/header/${id}`)
    get_header()
  }
  //// header end

  return (
    <>
      
      <div id='admin_header'>
        <div className="container">
          <div className="header">
            <div className="text">
              <p>HEADER foto edit</p>
            </div>
            <div className="formikk">
              <Formik
                initialValues={{ src: '' }}
                validationSchema={Yup.object({
                  src: Yup.string()
                    .required('Required'),
                })}
                onSubmit={(values, { setSubmitting ,resetForm}) => {
                  post_header(values)
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm()
                  }, 400);
                }}
              >
                <Form className='form'>
                  <label htmlFor="src">src</label>
                  <Field name="src" type="text" />
                  <ErrorMessage name="src" />
                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
            <div className="table">
              {loading?<table border={1}>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>src</th>
                    <th>foto</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>
                  { header && header.map((item) => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td className='src'>{item.src}</td>
                      <td className='imgbox'><img src={item.src} alt="" /></td>
                      <td onClick={()=>del_header(item._id)}><div className='del_btn' >delete</div></td>
                    </tr>
                  ))}

                </tbody>

              </table>:<div className="loader"></div>}
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin_header