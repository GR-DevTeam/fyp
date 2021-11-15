import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import { BrowserRouter } from 'react-router-dom';
import { faHome, faShoppingCart, faStore, faVial } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';


export default {
  title: 'Components/Molecules/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [(Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )]
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      to: '/home',
      icon: faHome,
    },
    {
      to: '/shop',
      content: 'Shop',
      icon: faStore
    },
    {
      to: '/cart',
      content: 'Cart',
      icon: faShoppingCart
    },
    {
      to: '/Checkout',
      content: 'Checkout',
      icon: faCreditCard
    }
  ]
}

export const HomeExample = Template.bind({});
HomeExample.args = {
  items: [
    {
      to: '/home',
      icon: faHome,
    },]
}

export const NormalExample = Template.bind({});
NormalExample.args = {
  items: [
    {
      to: '/test',
      content: 'Test',
      icon: faVial,
    },]

}