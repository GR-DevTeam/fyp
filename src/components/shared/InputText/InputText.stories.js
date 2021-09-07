import React from 'react';

import InputText from './InputText';

export default {
  component: InputText,
  title: 'InputText',
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
};
