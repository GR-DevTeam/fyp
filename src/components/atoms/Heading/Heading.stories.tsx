import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from './Heading';

export default {
  title: 'Components/Atoms/Heading',
  component: Heading,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum volutpat arcu eu dapibus. Donec cursus porttitor cursus. In tincidunt.',
  },
  argTypes: {
    children: { control: 'Heading' },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <div
    style={{
      backgroundColor: args.isLight ? '#333' : 'transparent',
      padding: '2rem',
    }}
  >
    <Heading {...args}>{args.children}</Heading>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
