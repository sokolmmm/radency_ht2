import React from 'react';
import GreenButton from './GreenButton';

export default {
  title: 'Button',
  component: GreenButton,
};

export function Primary() {
  return <GreenButton title="primary" isSubmitButton />;
}

export function Default() {
  return <GreenButton title="click" isSubmitButton />;
}
