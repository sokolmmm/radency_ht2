import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TabButton, { EnumSide } from '../common/buttons/TabButton';

import { setActiveTab } from '../../redux/notes/slice';
import { EnumTabs } from '../../redux/notes/interfaces';
import { selectActiveTab } from '../../redux/notes/selectors';

function Tabs(): JSX.Element {
  const dispatch = useDispatch();

  const activeTab = useSelector(selectActiveTab);

  const onTabClick = (tab: EnumTabs): void => {
    dispatch(setActiveTab(tab));
  };

  return (
    <header className="h-10 w-full mx-auto grid grid-cols-2 md:w-1/2">
      <TabButton
        name={EnumTabs.ACTIVE}
        side={EnumSide.LEFT}
        isActive={activeTab === EnumTabs.ACTIVE}
        onTabsClick={() => onTabClick(EnumTabs.ACTIVE)}
      />
      <TabButton
        name={EnumTabs.ARCHIVED}
        side={EnumSide.RIGHT}
        isActive={activeTab === EnumTabs.ARCHIVED}
        onTabsClick={() => onTabClick(EnumTabs.ARCHIVED)}
      />
    </header>
  );
}

export default Tabs;
