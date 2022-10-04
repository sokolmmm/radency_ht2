import React from 'react';

import { ErrorMessage, Field } from 'formik';

interface IInput {
  name: string;
  label: string;
}

function Input({ name, label }: IInput): JSX.Element {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-body w-full text-base font-medium uppercase text-gray-600"
      >
        {label}
      </label>
      <Field
        type="text"
        id={name}
        name={name}
        className="h-10 w-full border-2 border-solid border-gray-200 bg-zinc-50 font-body text-base
        font-normal py-0 px-4 focus:outline-none focus:border-l-6 focus:border-l-teal-700 "
      />
      <ErrorMessage
        name={name}
        component="div"
        className=" grid w-full items-center text-sm text-red-400"
      />
    </div>
  );
}

export default Input;
