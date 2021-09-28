import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from './Sidebar';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import theme from '../../../theme/theme';

export default {
  title: 'Components/Molecules/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;
export const Default = Template.bind({});
Default.args = {
  items: [
    {
      icon: faUserFriends,
      text: 'example 1',
      color: theme.colors.light,
      onHoverColor: theme.colors.primary,
    },
    {
      icon: faUserFriends,
      text: 'example 2',
      color: theme.colors.light,
      onHoverColor: theme.colors.primary,
    },
    {
      icon: faUserFriends,
      text: 'example 3',
      color: theme.colors.light,
      onHoverColor: theme.colors.primary,
    },
    {
      icon: faUserFriends,
      text: 'example 4',
      color: theme.colors.light,
      hoverColor: theme.colors.primary,
    },
  ],
};
