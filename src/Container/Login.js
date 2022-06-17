import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Login(props) {
    const [login, setLogin] = useState('Login');
    const [reset, setReset] = useState([]);

    let schema = yup.object().shape({
        email: yup.string().required("Please Enter Your Email.").email(),
        password: yup.string().min(4).required("Please Enter Your Password.")
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleSubmit, handleChange, errors } = formik

    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            // reset ?
                            // <h2>
                            //     Forgot Password
                            // </h2>
                            // :
                            login === 'Login' ?
                                <h2>Login</h2>
                                :
                                <h2>Signup</h2>
                        }
                    </div>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
                            <div className="row">
                                {
                                    login === 'Login' ?
                                        null
                                        :
                                        <div className='row'>
                                            <div className="col-md-4 form-group">
                                                <input type="Name" name="Name" className="form-control" id="Name" placeholder="Your Enter Name" />
                                                <div className="validate" />
                                            </div>
                                        </div>
                                }
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange} />
                                    <div className="validate" />
                                    <p>{errors.email}</p>
                                    
                                </div>

                            </div>
                            <div className='row'>
                                <div className="col-md-4 form-group">
                                    <input type="password" name="password" className="form-control" id="password" placeholder="Your password" />
                                    <div className="validate" />
                                    <p>{errors.password}</p>
                                </div>
                            </div>
                            {

                                login === 'Login' ?
                                    <div>
                                        <span>Create a Account:</span><button onClick={() => { setLogin('Singup'); setReset(false) }}>Click Here</button>
                                    </div>
                                    :
                                    <div>
                                        <span>Already Have an Account?</span><button onClick={() => { setLogin('Login'); setReset(false) }}>Click Here</button>
                                    </div>
                            }

                            <div className="text-center"><button type="submit">Login</button></div>

                        </Form>
                    </Formik>
                </div>
            </section>
        </main>

    );
}

export default Login;