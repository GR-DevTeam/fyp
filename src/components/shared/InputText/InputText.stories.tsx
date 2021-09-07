import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputText from './InputText';

export default {
  title: 'Components/Molecules',
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'hello',
};
