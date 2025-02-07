import { Button, ButtonProps } from './button';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  args: {
    onClick: fn(),
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l', 'xl'] as ButtonProps['size'][],
    },
    view: {
      control: 'select',
      options: ['primary', 'base', 'flat'] as ButtonProps['view'][],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    text: 'Button',
    view: 'primary',
    size: 'l',
  },
};

export const Base: Story = {
  args: {
    disabled: false,
    text: 'Button',
    view: 'base',
    size: 'l',
  },
};

export const Flat: Story = {
  args: {
    disabled: false,
    text: 'Button',
    view: 'flat',
    size: 'l',
  },
};

export const WithIcon: Story = {
  args: {
    disabled: false,
    text: 'Button',
    view: 'primary',
    size: 'l',
    icon: 'cross',
  },
};

export const IsOnlyIcon: Story = {
  args: {
    disabled: false,
    view: 'primary',
    size: 'l',
    icon: 'cross',
  },
};
