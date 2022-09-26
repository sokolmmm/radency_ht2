import React from 'react';

import logo from '../../../../assets/images/arrow.png';
import styles from './GreenButton.module.scss';

interface IGreenButtonProps {
  title: string;
  isSubmitButton: boolean;
  onButtonClick?: () => void;
}

const defaultProps = {
  onButtonClick: (v: void) => v,
};

function GreenButton({
  title,
  isSubmitButton,
  onButtonClick,
}: IGreenButtonProps & typeof defaultProps) {
  return (
    <button
      type={isSubmitButton ? 'submit' : 'button'}
      className={styles.greenButton}
      onClick={onButtonClick}
    >
      <span>{title}</span>
      <img src={logo} alt="Arrow" />
    </button>
  );
}

GreenButton.defaultProps = defaultProps;

export default GreenButton;
