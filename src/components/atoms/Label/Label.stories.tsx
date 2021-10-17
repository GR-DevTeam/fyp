import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './Label';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
  args: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>{args.children}</Label>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Label',
  icon: faSearch,
};
