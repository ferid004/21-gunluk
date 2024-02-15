import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import './index.scss'
import { useUser } from '../../context/userContext'
import Login from '../login'
import axios from 'axios'
function Profil() {
    ///
    const { User, setUser, LoginUser } = useUser()
    console.log(User);
    ///

    const UpdateImage = async (values) => {
        try {
            const res = await axios.put(`http://localhost:3000/user/image/${User.userId}`, { image: values.image });
            console.log("UpdateImage response:", res);
        } catch (error) {
            console.error("Error updating image:", error.response.status, error.response.data);
        }
    };

    return (
        <div>
            {User ? <>
                <p>{User.username}</p>
                <p> sekil burd OLMALIDI{User.image}</p>
                <p>{User.info}</p>
                <p>{User.basket}</p>
                <p>{User.wishlist}</p>
                <div className="">
                    <p>update img</p>
                    <>
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
                            <Form>
                                <label htmlFor="image">edit image</label>
                                <Field name="image" type="text" />
                                <ErrorMessage name="image" />

                                <button type="submit">Submit</button>
                            </Form>
                        </Formik>
                    </>
                </div>
                <p>
                    tegi tegi tegi tegi tegi tegi tegi tegi tegi tegi
                </p>
            </>
                : <Login></Login>
            }
        </div>
    )
}

export default Profil