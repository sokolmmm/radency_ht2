import React from 'react';
import styles from './TableHeaderItem.module.scss';

interface ITableHeaderItem {
  title: string;
}

function TableHeaderItem({ title }: ITableHeaderItem) {
  return (
    <div className={styles.tableHeaderItem}>
      <span>{title}</span>
    </div>
  );
}

export default TableHeaderItem;
