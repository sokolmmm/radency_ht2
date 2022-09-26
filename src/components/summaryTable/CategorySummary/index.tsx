import React from 'react';
import ListElement from '../../common/ListElement';
import AdaptiveHeader from '../../common/AdaptiveHeader';
import styles from './CategorySummary.module.scss';

interface ICategorySummary {
  name: string;
  activeCount: string;
  archivedCount: string;
}

const headerItems = ['Category', 'Active', 'Archived'];

function CategorySummary({ name, activeCount, archivedCount }: ICategorySummary): JSX.Element {
  return (
    <div className={styles.categorySummary}>
      <AdaptiveHeader headerItems={headerItems} />
      <div className={styles.elementsList}>
        <ListElement title={name} />
        <ListElement title={activeCount} />
        <ListElement title={archivedCount} />
      </div>
    </div>
  );
}

export default CategorySummary;
