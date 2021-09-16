import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputText from './InputText';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Atoms/Input',
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  icon: faSearch,
};
