import { ComponentStory, ComponentMeta } from '@storybook/react';
import Rating from './Rating';


export default {
  title: 'Components/Molecules/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Excelent = Template.bind({});
Excelent.args = {
  value : 5,
};
export const Bad = Template.bind({});
Bad.args = {
  value : 1,
};
export const Good = Template.bind({});
Good.args = {
  value : 2,
};
