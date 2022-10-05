import React from 'react';

import { EnumTabs } from '../../../redux/notes/interfaces';

export enum EnumSide {
  LEFT = 'left',
  RIGHT = 'right',
}

interface ITabButtonProps {
  name: EnumTabs;
  side: EnumSide;
  isActive: boolean;
  onTabsClick: (name: EnumTabs) => void;
}

function TabButton({
  name, side, isActive, onTabsClick,
}: ITabButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={() => onTabsClick(name)}
      className={`
        font-mono font-semibold text-lg shadow-2xl uppercase ease-in-out transition-transform 
        hover:bg-teal-700 hover:text-white active:translate-y-2
        ${isActive ? 'bg-teal-700 text-white ' : 'bg-white text-teal-700'}
        ${side === EnumSide.LEFT ? 'rounded-l-2xl' : 'rounded-r-2xl'}
      `}
    >
      {name}
    </button>
  );
}

export default TabButton;
