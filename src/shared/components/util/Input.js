import React from 'react';
import { useField, ErrorMessage } from 'formik';

import './Input.css';


const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const element = props.type === 'textarea' ?
        (
            <textarea className={`form-control ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} autoComplete="off" />
        ) :
        (
            <input className={`form-control ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} autoComplete="off" />
        );
    return (
        <div className="input-box">

            <label htmlFor={field.name}> {label} </label>  <br />
            {element}
            <br />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}

export default Input
