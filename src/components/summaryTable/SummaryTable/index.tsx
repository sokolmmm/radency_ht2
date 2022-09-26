import React from 'react';

import CategoriesSummaryList from '../CategoriesSummaryList';
import SummaryHeader from '../SummaryHeader';

import styles from './SummaryTable.module.scss';

function SummaryTable(): JSX.Element {
  return (
    <section className={styles.summaryTable}>
      <SummaryHeader />
      <CategoriesSummaryList />
    </section>
  );
}

export default SummaryTable;
