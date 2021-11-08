import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'Components/Molecules/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;


export const Default = Template.bind({});
Default.args = {
  title: 'Hero title',
  buttonText: 'Hero button',
  onButtonClick: (ev) => console.log(ev),
}

export const CompleteHero = Template.bind({});
CompleteHero.args = {
  title: 'Hero title',
  description: 'Hero description',
  buttonText: 'Hero button',
  onButtonClick: (ev) => console.log(ev),
  terms: 'Hero terms',
};

