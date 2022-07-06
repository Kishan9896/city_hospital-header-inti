import React, { useState } from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from 'formik';

function Appointment(props) {
  const [appointment, setAppoinment] = useState();
  const phoneReg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let schema = yup.object().shape({
    name: yup.string().required("Please Enter Your Name."),
    email: yup.string().required("Please Enter Your Email.").email(),
    phone: yup.string().matches(phoneReg |'Phone Number is Not Valid.').required("Please Enter Your PhoneNumber."),
    date: yup.string().required("Please Enter Appointment Date."),
    department: yup.string().required("Please Select Appointment Department."),
    message: yup.string()
  });

  const local = (values) => {
    const localData = JSON.parse(localStorage.getItem("Apt"));

    const id = Math.floor(Math.random()* 1000);

    const dataIn = {
      id: id,
      ...values
    }

    if (localData === null) {
      localStorage.setItem("Apt", JSON.stringify([dataIn]));
    } else {
      localData.push(dataIn);
      localStorage.setItem("Apt", JSON.stringify(localData))
    }
  }

  const FormikOrg = useFormik({
    initialValues: {
        name: '',
      email: '',
      phone:'',
      date: '',
      department: '',
      message: ''
    },
    validationSchema: schema,
    onSubmit: (values, action) => {
      local(values);
      action.resetForm();
    },
  });

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } = FormikOrg

  return (
    <main>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
          </div>
          <Formik values={FormikOrg}>
          <Form onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{errors.name && touched.name ? errors.name : ''}</p>
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{errors.email && touched.email ? errors.email : ''}</p>
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{errors.phone && touched.phone ? errors.phone : ''}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input
                  type="date"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{errors.date && touched.date ? errors.date : ''}</p>
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="department"
                  id="department"
                  className="form-select"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value>Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
                <p>{errors.department && touched.department ? errors.department : ''}</p>
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message (Optional)"
                defaultValue={""}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>{errors.message && touched.message ? errors.message : ''}</p>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your appointment request has been sent successfully. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Make an Appointment</button>
            </div>
          </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
}

export default Appointment;
