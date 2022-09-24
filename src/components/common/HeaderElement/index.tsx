import React from 'react';
import styles from './HeaderElement.module.scss';

interface ITableHeaderItem {
  title: string;
}

function HeaderElement({ title }: ITableHeaderItem) {
  return (
    <div className={styles.headerElement}>
      <span>{title}</span>
    </div>
  );
}

export default HeaderElement;
