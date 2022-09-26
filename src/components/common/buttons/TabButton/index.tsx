import React from 'react';

import styles from './TabButton.module.scss';

import { EnumTabs } from '../../../../redux/notes/interfaces';

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
      className={
        isActive
          ? `${styles.tabButton} ${styles.active} ${styles[side]}`
          : `${styles.tabButton} ${styles[side]}`
      }
    >
      {name}
    </button>
  );
}

export default TabButton;
