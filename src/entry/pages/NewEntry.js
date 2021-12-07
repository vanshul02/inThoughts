import React from 'react';
import { Formik, Form } from 'formik';

import Input from '../../shared/components/util/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import * as Yup from 'yup';
import './NewEntry.css';

const NewEntry = () => {
    const validate = Yup.object({
        title: Yup.string()
            .min(2, "Title must be atleast 2 characters long!")
            .required("Required Field"),
        date: Yup.date()
            .required("Required Field"),
        description: Yup.string()
            .min(2, "Description must be atleast 2 characters long!")
            .max(250, "Description should be less than 250 characters!")
            .required("Required Field")
    });
    return (
        <Formik
            enableReinitialize
            initialValues={{
                title: '',
                date: '',
                description: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {formik => (
                <div className="newEntry-wrapper">
                    <h1 className="newEntry-title"> New Entry </h1>
                    <Form >
                        <Input name='title' label="Title : " type="text" placeholder="Title" />
                        <Input name='date' label="Date : " type="date" />
                        <Input name='description' label="Description : " type="textarea" placeholder="Description" />
                        <div className="newEntry-submit">
                            <Button type="submit" disabled={!(formik.isValid && formik.dirty)} >Add Entry </Button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik >
    )
}

export default NewEntry;