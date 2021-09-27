import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ChangedIcon = Template.bind({});
ChangedIcon.args = {
  icon: faArrowDown,
};
