import React from 'react';

import AdaptiveHeader from '../common/AdaptiveHeader';
import ListElement from '../common/ListElement';

interface ICategorySummary {
  name: string;
  activeCount: string;
  archivedCount: string;
}

const headerItems = ['Category', 'Active', 'Archived'];

function CategorySummary({ name, activeCount, archivedCount }: ICategorySummary): JSX.Element {
  return (
    <div
      className="grid grid-cols-summary h-auto rounded-2xl shadow-xl items-center md:h-15
      md:py-0 md:px-5 md:rounded-lg bg-white md:grid-cols-1"
    >
      <AdaptiveHeader headerItems={headerItems} />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <ListElement title={name} />
        <ListElement title={activeCount} />
        <ListElement title={archivedCount} />
      </div>
    </div>
  );
}

export default CategorySummary;
