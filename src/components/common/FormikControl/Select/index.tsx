import React from 'react';

import { ErrorMessage, Field } from 'formik';

import styles from './Select.module.scss';

interface ISelect {
  name: string;
  label: string;
  options: string[];
}

function Select({
  name, label, options,
}: ISelect): JSX.Element {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.selectWrapper}>
        <Field as="select" id={name} name={name}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <ErrorMessage name={name} component="div" className={styles.textError} />
      </div>
    </div>
  );
}

export default Select;
