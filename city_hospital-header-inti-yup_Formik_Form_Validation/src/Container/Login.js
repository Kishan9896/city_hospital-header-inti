import React, { useState } from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { singInAction, singupAction } from "../Redux/Action/auth.action";

function Login(props) {
  const [login, setLogin] = useState("Login");
  const [reset, setReset] = useState(false);

  const dispatch = useDispatch();

  let schemaObj;
  let initialValu;

  if (login === "Login") {
    schemaObj = {
      email: yup.string().required("Please Enter Your Email.").email(),
      password: yup.string().min(4).required("Please Enter Your Password."),
    };
    initialValu = {
      email: "",
      password: "",
    };
  } else if (login === "Singup") {
    schemaObj = {
      name: yup.string().required("Please Enter Your Name."),
      email: yup.string().required("Please Enter Your Email.").email(),
      password: yup.string().min(4).required("Please Enter Your Password."),
    };
    initialValu = {
      name: "",
      email: "",
      password: "",
    };
  }

  const handleLogin = () => {
    localStorage.setItem("user", "123");
  };

  let schema = yup.object().shape(schemaObj);

  const formik = useFormik({
    initialValues: initialValu,
    validationSchema: schema,
    onSubmit: (values, action) => {
      if (login === "Login") {
        dispatch(singInAction(values));
      } else if (login === "Singup") {
        dispatch(singupAction(values));
      }
      // action.resetForm();
    },
    enableReinitialize: true,
  });

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    formik;
  // console.log(errors);

  return (
    <main>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            {reset ? (
              <h2>Forgot Password</h2>
            ) : login === "Login" ? (
              <h2>Login</h2>
            ) : (
              <h2>Singup</h2>
            )}
          </div>
          <Formik values={formik}>
            <Form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                {reset ? null : login === "Login" ? null : (
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="Name"
                        placeholder="Your Enter Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <p>{errors.name && touched.name ? errors.name : ""}</p>
                    </div>
                  </div>
                )}
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <p>{errors.email && touched.email ? errors.email : ""}</p>
                </div>
              </div>
              {reset ? null : (
                <div className="row">
                  <div className="col-md-4 form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Your password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <p>
                      {errors.password && touched.password
                        ? errors.password
                        : ""}
                    </p>
                  </div>
                </div>
              )}

              {login === "Login" ? (
                <div>
                  <span>Create a Account:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setLogin("Singup");
                      setReset(false);
                    }}
                  >
                    Click Here
                  </button>
                </div>
              ) : (
                <div>
                  <span>Already Have an Account?</span>
                  <button
                    type="button"
                    onClick={() => {
                      setLogin("Login");
                      setReset(false);
                    }}
                  >
                    Click Here
                  </button>
                </div>
              )}
              <button
                onClick={() => {
                  setReset(true);
                }}
              >
                Forgot Password
              </button>
              {reset ? (
                <div className="text-center">
                  <button type="submit">submit</button>
                </div>
              ) : login === "Login" ? (
                <div className="text-center">
                  <button type="submit">Login</button>
                </div>
              ) : (
                <div className="text-center">
                  <button type="submit">Singup</button>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
}

export default Login;
