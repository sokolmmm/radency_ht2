/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import TabButton, { EnumSide } from '../../common/buttons/TabButton/TabButton';
import styles from './Tabs.module.scss';

export enum EnumTabs {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
}

function Tabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState(EnumTabs.ACTIVE);

  const onTabClick = (tab: EnumTabs): void => {
    setActiveTab(tab);
  };

  return (
    <header className={styles.tabs}>
      <TabButton
        title="Active"
        name={EnumTabs.ACTIVE}
        side={EnumSide.LEFT}
        isActive={activeTab === EnumTabs.ACTIVE}
        onTabsClick={() => onTabClick(EnumTabs.ACTIVE)}
      />
      <TabButton
        title="Archived"
        name={EnumTabs.ARCHIVED}
        side={EnumSide.RIGHT}
        isActive={activeTab === EnumTabs.ARCHIVED}
        onTabsClick={() => onTabClick(EnumTabs.ARCHIVED)}
      />
    </header>
  );
}

export default Tabs;
