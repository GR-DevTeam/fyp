import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from '../Link/Link';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import theme from '../../../theme/theme';

export default {
  title: 'Components/Atoms/Link',
  component: Link,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    hoverColor: {
      control: {
        type: 'color',
      },
    },
  },
} as ComponentMeta<typeof Link>;
const Template: ComponentStory<typeof Link> = (args) => (
  <div style={{ backgroundColor: '#ccc' }}>
    <Link {...args}>Link</Link>
  </div>
);
export const Default = Template.bind({});
Default.args = {
  icon: faSearch,
  text: 'Default',
  color: theme.colors.dark,
  hoverColor: theme.colors.primary,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  text: 'Default',
  color: theme.colors.dark,
  hoverColor: theme.colors.primary,
};
