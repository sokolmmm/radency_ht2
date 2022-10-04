import React from 'react';

import Input from './Input';
import Select from './Select';

export enum EnumFormikControl {
  INPUT = 'input',
  SELECT = 'select',
}
interface IFormikControl {
  control: EnumFormikControl;
  name: string;
  label: string;
  options?: Array<string>;
}

const defaultProps = {
  options: [''],
};

function FormikControl({
  control, name, label, options,
}: IFormikControl & typeof defaultProps) {
  switch (control) {
    case EnumFormikControl.INPUT:
      return <Input name={name} label={label} />;
    case EnumFormikControl.SELECT:
      return <Select name={name} label={label} options={options} />;
    default:
      return null;
  }
}

FormikControl.defaultProps = defaultProps;

export default FormikControl;
