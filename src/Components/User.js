import React,{useContext} from 'react'
import { MainContext } from '../Contexts/MainContext'
import {useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {Form, Row, Col, Button, Alert} from 'react-bootstrap';

import "./form.css";



function User() {
    const initialValues = { username: "", email: "", password: "" ,nic:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nicv=/^[0-9+]{9}[vV|xX]$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } 
     if (!values.nic) {
      errors.nic = "NIC is required";
    }else if(!nicv.test(values.nic)){
      errors.nic = "This nic  is not a valid  format!";
    }else if (values.nic.length > 10) {
      errors.password = "Enter valid nic";
    } 

    return errors;
  };

  return (
    <div className="container1">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              size="100"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              size="100"
              name="email"
              align="left"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              size="100"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              align="left"
            />

          </div>
          <p>{formErrors.nic}</p>
          <div className="field">
            <label>NIC</label>
            <input
              type="text"
              size="100"
              name="NIC"
              placeholder="NIC"
              value={formValues.nic}
              onChange={handleChange}
              align="left"
            />

          </div>

          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
          <br></br>
          <a href="http://localhost:3000/SignIn">Do you have an account ?SignIn</a>
        </div>
      </form>
    </div>
  );
}

export default User
