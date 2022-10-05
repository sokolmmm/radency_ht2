import React from 'react';

interface INoteItem {
  title: string;
}

function ListElement({ title }: INoteItem): JSX.Element {
  return (
    <div
      className="
        whitespace-nowrap overflow-hidden text-ellipsis px-2 font-body font-medium
        text-sm text-gray-500
      "
    >
      <span>{title}</span>
    </div>
  );
}

export default ListElement;
