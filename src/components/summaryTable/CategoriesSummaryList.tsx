import React from 'react';

import { useSelector } from 'react-redux';

import CategorySummary from './CategorySummary';

import { selectSummaryByCategories } from '../../redux/notes/selectors';

function CategoriesSummaryList(): JSX.Element {
  const summaryByCategories = useSelector(selectSummaryByCategories);

  return (
    <div className="mt-3 grid gap-3">
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
