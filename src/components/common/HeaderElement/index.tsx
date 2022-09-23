import React from 'react';
import styles from './TableHeaderItem.module.scss';

interface ITableHeaderItem {
  title: string;
}

function HeaderElement({ title }: ITableHeaderItem) {
  return (
    <div className={styles.tableHeaderItem}>
      <span>{title}</span>
    </div>
  );
}

export default HeaderElement;
