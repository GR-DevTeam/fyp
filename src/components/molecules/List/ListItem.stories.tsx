import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItem from './ListItem';

export default {
  title: 'Components/Atoms/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />

export const Default = Template.bind({})
Default.args = {
  content: "This is an item",
}