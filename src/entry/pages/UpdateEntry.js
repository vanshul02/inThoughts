import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../../shared/components/util/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import './NewEntry.css';

const DUMMY_ENTRIES = [
    {
        uid: 'any1',
        title: 'World Trade Park',
        image: 'https://images.pexels.com/photos/10305718/pexels-photo-10305718.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        description: 'Went to World Trade Park with friends',
        date: '30-11-2021',
        eid: 'e1',
        location: {
            lat: 26.853198,
            lng: 75.804699
        }
    },
    {
        uid: 'any1',
        title: 'World Trade Park',
        image: 'https://images.pexels.com/photos/10305718/pexels-photo-10305718.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        description: 'Went to World Trade Park with friends',
        date: '30-11-2021',
        eid: 'e2',
        location: {
            lat: 26.853198,
            lng: 75.804699
        }
    }
];

const UpdateEntry = () => {
    const validate = Yup.object({
        title: Yup.string()
            .min(2, "Title must be atleast 2 characters long!")
            .required("Required Field"),
        description: Yup.string()
            .min(2, "Description must be atleast 2 characters long!")
            .max(250, "Description should be less than 250 characters!")
            .required("Required Field")
    });
    const entryId = useParams().entryId;
    const identifiedEntry = DUMMY_ENTRIES.find(p => p.eid === entryId);
    if (!identifiedEntry) {
        return <h2> Could not find entry! </h2>;
    }
    return (
        <Formik
            enableReinitialize
            initialValues={{
                title: identifiedEntry.title,
                description: identifiedEntry.description
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {formik => (
                <div className="newEntry-wrapper">
                    <h1 className="newEntry-title"> Update Entry </h1>
                    <Form >
                        <Input name='title' label="Title : " type="text" placeholder="Title" />
                        <Input name='description' label="Description : " type="textarea" placeholder="Description" />
                        <div className="newEntry-submit">
                            <Button type="submit" disabled={!(formik.isValid)} >Update Entry </Button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik >
    );
}

export default UpdateEntry;
