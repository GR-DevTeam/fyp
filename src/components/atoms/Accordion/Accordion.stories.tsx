import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from '../Accordion/Accordion';

export default {
title: 'Components/Atoms/Accordion',
component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;


export const Default = Template.bind({});