import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: StoryObj = {};
