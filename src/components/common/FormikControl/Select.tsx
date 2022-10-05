import React from 'react';

import { ErrorMessage, Field } from 'formik';

import arrow from '../../../assets/images/select_arrow.png';

interface ISelect {
  name: string;
  label: string;
  options: string[];
}

function Select({ name, label, options }: ISelect): JSX.Element {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-body w-full text-base font-medium uppercase text-gray-600"
      >
        {label}
      </label>
      <div className="w-full h-10 relative">
        <img
          src={arrow}
          alt="arrow"
          className="absolute w-3 h-2 top-1/2 right-3 pointer-events-none"
        />
        <Field
          as="select"
          id={name}
          name={name}
          className="
            h-full w-full box-border appearance-none outline-none py-0 pl-4 pr-6 cursor-pointer
            border-2 border-solid border-gray-200 bg-zinc-50 font-body text-base ont-normal
          "
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name={name}
          component="div"
          className="grid w-full items-center text-sm text-red-400"
        />
      </div>
    </div>
  );
}

export default Select;
