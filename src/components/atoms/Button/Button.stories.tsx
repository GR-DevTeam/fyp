import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Default.args = {
  isPrimary: true,
};
export const Inverted = Template.bind({});
Default.args = {
  isInverted: true,
};
