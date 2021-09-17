import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from '../Link/Link';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Atoms/Link',
  component: Link,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    color_hover: {
      control: {
        type: 'color',
      },
    },
  },
} as ComponentMeta<typeof Link>;
const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Link</Link>
);
export const Default = Template.bind({});
Default.args = {
  icon: faSearch,
  text: 'default',
  color: '#000',
  color_hover: '#FE8F29',
};
