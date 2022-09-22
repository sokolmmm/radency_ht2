/* eslint-disable import/no-cycle */
import React from 'react';
import styles from './TabButton.module.scss';
import { EnumTabs } from '../../../Notes/Tabs/Tabs';

export enum EnumSide {
  LEFT = 'left',
  RIGHT = 'right',
}

interface ITabButtonProps {
  title: string;
  name: EnumTabs;
  side: EnumSide;
  isActive: boolean;
  onTabsClick: (name: EnumTabs) => void;
}

function TabButton({
  title, name, side, isActive, onTabsClick,
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
      {title}
    </button>
  );
}

export default TabButton;
