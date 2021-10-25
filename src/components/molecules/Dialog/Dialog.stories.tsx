import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'Components/Molecules/Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog/>;

export const Default = Template.bind({});
Default.args = {}