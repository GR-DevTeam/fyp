import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from './Sidebar';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Molecules/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);
export const Default = Template.bind({});
Default.args = {
  data: [
    {
      icon: faUserFriends,
      text: 'example',
      color: '#F8F7F9',
      onHoverColor: '#FE8F29',
    },
  ],
};
