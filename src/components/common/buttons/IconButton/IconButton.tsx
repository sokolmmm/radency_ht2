import React from 'react';
import styles from './IconButton.module.scss';
import logo from '../../../../assets/images/archive.png';

function IconButton(): any {
  return (
    <button type="button" className={styles.iconButton}>
      <img src={logo} alt="Archive task button" />
    </button>
  );
}

export default IconButton;
