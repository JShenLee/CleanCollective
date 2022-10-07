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
    
      method: "POST",
      data: userObject.false,
      withCredentials: false,
      url: "http://localhost:5000/user/login",
       //DESTROY(userObject);
    })
    .then((res) => {
      
      res.send("logged out")
      console.log("logged out");
    })
    .catch((err) => alert("Somthing went wrong "));
  };

  
  return (
    <UserLogoutButton
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
     
    </UserLogoutButton>
  );
};

// Export Component
export default UserLogoutComponent;
