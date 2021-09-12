import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from '../Link/Link';

export default {
  title: 'Components/Atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;
const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Link</Link>
);
export const Default = Template.bind({});
Default.args = {};
