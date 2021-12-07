import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../../shared/components/util/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import './SignUp.css';

const SignUp = () => {
    const validate = Yup.object({
        name: Yup.string()
            .min(2, "Please enter at least 2 characters!")
            .required("Required Field"),
        email: Yup.string()
            .email("Invalid E-Mail Id")
            .required("Required Field"),
        password: Yup.string()
            .min(6, "Password must be of at least 6 characters")
            .required("Required Field"),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords do not match!")
            .required("Required Field")
    });
    return (
        <Formik
            enableReinitialize
            initialValues={{
                name: '',
                email: '',
                password: '',
                confirmpassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {formik => (
                <React.Fragment>
                    <div className="auth-signup-wrapper">
                        <h1 className="auth-signup-title"> SignUp </h1>
                        <Form >
                            <Input name='name' label="Your Name : " type="text" placeholder="Name" />
                            <Input name='email' label="E-Mail : " type="email" placeholder="E-Mail" />
                            <Input name='password' label="Password : " type="password" placeholder="Password" />
                            <Input name='confirmpassword' label="Confirm Password : " type="password" placeholder="Confirm Password" />
                            <div className="auth-signup">
                                <Button type="submit" disabled={!(formik.isValid && formik.dirty)} >SignUp </Button>
                                <Button inverse to={"/auth/"}>Switch to Login </Button>
                            </div>
                        </Form>
                    </div>
                </React.Fragment>
            )}
        </Formik >
    );
}

export default SignUp;
