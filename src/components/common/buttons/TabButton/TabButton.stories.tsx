import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TabButton, { EnumSide } from './TabButton';

import { EnumTabs } from '../../../../redux/notes/interfaces';

export default {
  title: 'Buttons/TabButton',
  component: TabButton,
  argTypes: {
    name: {
      description: 'The text displayed on the button.',
    },
    isActive: {
      description: 'If true, the button will use the Active variant.',
    },
    side: {
      description: 'The location side of the button.',
    },
    onTabsClick: {
      description: 'The function used to change active tab.',
    },
  },
} as ComponentMeta<typeof TabButton>;

const Template: ComponentStory<typeof TabButton> = (args) => <TabButton {...args} />;

export const Active = Template.bind({});
Active.args = {
  name: EnumTabs.ACTIVE,
  isActive: true,
  side: EnumSide.LEFT,
  onTabsClick: function toggleActiveTab() {},
};

export const Inactive = Template.bind({});
Inactive.args = {
  name: EnumTabs.ARCHIVED,
  isActive: false,
  side: EnumSide.RIGHT,
  onTabsClick: function toggleActiveTab() {},
};
