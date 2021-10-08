import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum volutpat arcu eu dapibus. Donec cursus porttitor cursus. In tincidunt.',
  },
  argTypes: {
    children: { control: 'Label' },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>{args.children}</Label>
);

export const Default = Template.bind({});
Default.args = {};
