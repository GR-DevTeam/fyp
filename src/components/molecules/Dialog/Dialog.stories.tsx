import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'Components/Molecules/Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title:' This is a dialog',
  content: 'This is the dialog content',
  show: true,
  onCancel: () => alert( 'Action cancelled' ),
  onConfirm: () => alert( 'Action confirmed' )
}