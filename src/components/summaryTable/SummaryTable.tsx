import React from 'react';

import CategoriesSummaryList from './CategoriesSummaryList';
import SummaryHeader from './SummaryHeader';

function SummaryTable(): JSX.Element {
  return (
    <section className="p-5">
      <SummaryHeader />
      <CategoriesSummaryList />
    </section>
  );
}

export default SummaryTable;
