import React from 'react';

import HeaderElement from './HeaderElement';

interface IAdaptiveHeader {
  headerItems: string[];
}
function AdaptiveHeader({ headerItems }: IAdaptiveHeader): JSX.Element {
  return (
    <div className="grid items-center bg-teal-700 py-0 px-5 rounded-l-2xl md:hidden">
      {headerItems.map((el) => (
        <HeaderElement title={el} key={el} />
      ))}
    </div>
  );
}

export default AdaptiveHeader;
