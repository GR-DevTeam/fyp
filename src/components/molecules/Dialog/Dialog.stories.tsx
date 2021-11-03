import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import Button from '../../atoms/Button/Button';
import { useAppDispatch } from '../../../app/hooks';
import { toggle } from '../../../features/dialog/dialogSlice';

export default {
  title: 'Components/Molecules/Dialog',
  component: Dialog,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
} as ComponentMeta<typeof Dialog>;


const Template: ComponentStory<typeof Dialog> = (args) =>{

  const dispatch = useAppDispatch()
  const onClickShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(toggle())
  }

return (
  <Fragment>
    <Button onClick={onClickShow}>Launch Dialog</Button>
    <Dialog {...args}/>
  </Fragment>
  )
}


export const Default = Template.bind({});
Default.args = {
  title:' This is a dialog',
  content: 'This is the dialog content',
  onConfirm: () => alert('Action confirmed'),
  onCancel: () => alert('Action cancelled')
}