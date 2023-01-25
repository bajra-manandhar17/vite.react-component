import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'contained',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large',
  variant: 'contained',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small',
  variant: 'contained',
};
