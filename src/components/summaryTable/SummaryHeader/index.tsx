import React from 'react';
import HeaderElement from '../../common/HeaderElement';
import styles from './SummaryHeader.module.scss';

const headerItems = ['Note category', 'Active', 'Archived'];

function SummaryHeader(): JSX.Element {
  return (
    <header className={styles.summaryHeader}>
      {headerItems.map((el) => (
        <HeaderElement title={el} key={el} />
      ))}
    </header>
  );
}

export default SummaryHeader;
