import React from 'react';

interface ITableHeaderItem {
  title: string;
}

function HeaderElement({ title }: ITableHeaderItem): JSX.Element {
  return (
    <div
      className=" font-mono font-semibold text-sm text-white
    sm:h-6 sm:grid sm:items-center md:text-lg md:pl-2 md:whitespace-nowrap md:overflow-hidden
    "
    >
      <span>{title}</span>
    </div>
  );
}

export default HeaderElement;
