import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './Label';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
  args: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>{args.children}</Label>
);

export const Default = Template.bind({});
Default.args = {
  text: 'LABEL',
  icon: faSearch,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  text: 'LABEL',
  onClose: () => console.log('hola'),
};