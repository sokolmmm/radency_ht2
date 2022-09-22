import React from 'react';
import styles from './GreenButton.module.scss';
import logo from '../../../../assets/images/arrow.png';

interface IGreenButtonProps {
  title: string;
}

function GreenButton({ title }: IGreenButtonProps) {
  return (
    <button type="button" className={styles.greenButton}>
      <span>{title}</span>
      <img src={logo} alt="Arrow" />
    </button>
  );
}

export default GreenButton;
