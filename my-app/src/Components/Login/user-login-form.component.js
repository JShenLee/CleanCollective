// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserLoginForm from "./user-login-form";

// LoginUser Component
const UserLoginComponent = () => {
  const [formValues] = useState({
    login_email_field: "",
    login_password_field: "",
  });
  // When user hits login button
  const onSubmit = (userObject) => {
    axios
      .post("http://localhost:5000/user/login", {
        email: userObject.login_email_field,
        password: userObject.login_password_field,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Login Success");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Incorrect username or password"));
  };

  // Return student form
  return (
    <UserLoginForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Login
    </UserLoginForm>
  );
};

// Export CreateStudent Component
export default UserLoginComponent;