// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserLogoutButton from "./logout-user";
import { Navigate, useNavigate } from "react-router-dom";
// LOGOUT Component
const UserLogoutComponent = () => {
  const navigate = useNavigate();
  const [formValues] = useState({
    login_email_field: "",
    login_password_field: "",
  });

//on click 
  const onSubmit = (userObject) => {
    axios({
    //   method: "POST",
    //   data: {
    //     username: userObject.login_email_feild, 
    //     password: userObject.login_password_feild,
    //   },
    //   withCredentials: false,
    //   url: "http://localhost:5000/user/login",
   // userObject.DESTROY();
    })
    .then((res) => {
      res = "logged out";
      console.log(res);
    })
    .catch((err) => alert("Somthing went wrong "));
  };

  // Return student form
  return (
    <UserLogoutButton
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
     
    </UserLogoutButton>
  );
};

// Export CreateStudent Component
export default UserLogoutComponent;
