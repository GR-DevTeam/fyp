import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Components/Atoms/Header',
  component: Header,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum volutpat arcu eu dapibus. Donec cursus porttitor cursus. In tincidunt.',
  },
  argTypes: {
    children: { control: 'Header' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <div
    style={{
      backgroundColor: args.isLight ? '#333' : 'transparent',
      padding: '2rem',
    }}
  >
    <Header {...args}>{args.children}</Header>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
