import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  onClick: (ev) => alert('clickEvent'),
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  isInverted: false,
  onClick: (ev) => alert('clickEvent'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  isInverted: false,
  onClick: (ev) => alert('clickEvent'),
};

export const Inverted = Template.bind({});
Inverted.args = {
  isInverted: true,
  onClick: (ev) => alert('clickEvent'),
};
