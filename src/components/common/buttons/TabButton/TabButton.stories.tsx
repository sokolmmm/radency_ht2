import React from 'react';
import { EnumTabs } from '../../../../redux/notes/interfaces';

import TabButton, { EnumSide } from './TabButton';

export default {
  title: 'buttons/TabButton',
  component: TabButton,
};

export function Default() {
  return (
    <TabButton side={EnumSide.LEFT} name={EnumTabs.ACTIVE} isActive onTabsClick={() => null} />
  );
}
