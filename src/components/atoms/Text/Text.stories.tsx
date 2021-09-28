import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Components/Atoms/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum volutpat arcu eu dapibus. Donec cursus porttitor cursus. In tincidunt.',
  },
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>{args.children}</Text>
);

export const Default = Template.bind({});
Default.args = {};