import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from './Navbar';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default {
    title: 'Components/Molecule/Navbar/Navbar',
    component: Navbar,
  } as ComponentMeta<typeof Navbar>;

  const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;


  export const Default = Template.bind({});

