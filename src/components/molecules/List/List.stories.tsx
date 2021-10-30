import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './List';

export default {
  title: 'Components/Molecules/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    'item A',
    1,
    'example3 '
  ],
};
