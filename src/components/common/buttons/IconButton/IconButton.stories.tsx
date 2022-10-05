import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconButton, { EnumIconButton } from './IconButton';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      description: 'The image displayed on the button.',
    },
    onButtonClick: {
      description: 'The function that will be used on button click.',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Edit = Template.bind({});
Edit.args = {
  icon: EnumIconButton.EDIT,
  onButtonClick: function onButtonClick() {},
};

export const Archive = Template.bind({});
Archive.args = {
  icon: EnumIconButton.ARCHIVE,
  onButtonClick: function onButtonClick() {},
};

export const Delete = Template.bind({});
Delete.args = {
  icon: EnumIconButton.DELETE,
  onButtonClick: function onButtonClick() {},
};

export const Close = Template.bind({});
Close.args = {
  icon: EnumIconButton.CLOSE,
  onButtonClick: function onButtonClick() {},
};
