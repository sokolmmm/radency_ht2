import React from 'react';

import { ErrorMessage, Field } from 'formik';

import styles from './Input.module.scss';

interface IInput {
  name: string;
  label: string;
}

function Input({ name, label }: IInput): JSX.Element {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{label}</label>
      <Field type="text" id={name} name={name} />
      <ErrorMessage name={name} component="div" className={styles.textError} />
    </div>
  );
}

export default Input;
