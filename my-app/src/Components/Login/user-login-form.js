import React from "react";
import '../../shared/css/loginForm.css';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button, NavLink } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const UserLoginForm = (props) => {
  const validationSchema = Yup.object().shape({
    // password: Yup.string().required("Required"),
  });
  console.log(props);
  return (

    <div className="form-floating mb-3">
      <h2 className="first_header">Welcome Back!</h2>
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            {/* <label htmlFor="login_email_feild">Email: </label> */}
            <Field
              id="email"
              placeholder="Email"
              name="login_email_feild"
              type="text"
              className="form-control"
            />
            <ErrorMessage
              name="login_email_feild"
              className="d-block invalid-feedback"
              component={"span"}
            />
            {/* <label htmlFor="login_password_feild">Password: </label> */}
            <Field
              id="password"
              placeholder="Password"
              name="login_password_feild"
              type="password"
              className="form-control"
            />
            <ErrorMessage
              name="login_password_feild"
              className="d-block invalid-feedback"
              component={"span"}
            />
          </FormGroup>
          <div className="button_login">
            <Button 
              variant="primary"
              size="lg"
              block="block"
              //onClick={"/forum"}
              type="submit"
              >
              {props.children}
            </Button>
          </div>


          <div className="login_links">
            <p className="register_link">
              <Link to={"/create-user"}>Register Now</Link>
            </p>
            <p className="forgot_link">
              <Link to={""}>Forgot Password?</Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserLoginForm;
