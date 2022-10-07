// Import Modules
import React, { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button, NavLink } from "react-bootstrap";


const UserLogoutButton = () => { return (
    <Formik>
        <form>
        <Button>
            Logout
        </Button>

        </form>
    </Formik>

)};

export default UserLogoutButton;