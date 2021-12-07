import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../shared/context/auth-context';

import Input from '../../shared/components/util/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import './Login.css';

const Login = () => {
    const auth = useContext(AuthContext);
    const validate = Yup.object({
        email: Yup.string()
            .email("Invalid E-Mail Id")
            .required("Required Field"),
        password: Yup.string()
            .min(6, "Invalid Password")
            .required("Required Field")
    });
    return (
        <Formik
            enableReinitialize
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
                auth.login();
            }}
        >
            {formik => (
                <React.Fragment>
                    <div className="auth-login-wrapper">
                        <h1 className="auth-login-title"> Login </h1>
                        <Form >
                            <Input name='email' label="E-Mail : " type="email" placeholder="E-Mail" />
                            <Input name='password' label="Password : " type="password" placeholder="Password" />
                            <div className="auth-login">
                                <Button type="submit" disabled={!(formik.isValid && formik.dirty)} >Login </Button>
                                <Button inverse to={"/auth/signup"}>Switch to Sign-Up </Button>
                            </div>
                        </Form>
                    </div>
                </React.Fragment>
            )}
        </Formik >
    );
}

export default Login;
