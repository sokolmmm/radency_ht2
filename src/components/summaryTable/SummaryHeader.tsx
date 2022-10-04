import React from 'react';

import HeaderElement from '../common/HeaderElement';

const headerItems = ['Note category', 'Active', 'Archived'];

function SummaryHeader(): JSX.Element {
  return (
    <header className="hidden bg-teal-700 rounded-lg py-0 px-5 shadow-xl md:grid md:grid-cols-3 md:self-center md:h-10 md:items-center">
      {headerItems.map((el) => (
        <HeaderElement title={el} key={el} />
      ))}
    </header>
  );
}

export default SummaryHeader;
