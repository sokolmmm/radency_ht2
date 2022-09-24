import React from 'react';
import { useSelector } from 'react-redux';

import CategorySummary from '../CategorySummary';
import { selectSummaryByCategories } from '../../../redux/notes/selectors';

import styles from './CategoriesSummaryList.module.scss';

function CategoriesSummaryList(): JSX.Element {
  const summaryByCategories = useSelector(selectSummaryByCategories);

  return (
    <div className={styles.categoriesSummaryList}>
      {summaryByCategories.map((el) => (
        <CategorySummary
          name={el.category}
          activeCount={el.active}
          archivedCount={el.archived}
          key={el.category}
        />
      ))}
    </div>
  );
}

export default CategoriesSummaryList;
