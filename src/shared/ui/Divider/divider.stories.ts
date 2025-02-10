import { Divider, DividerProps } from './divider';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Shared/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    view: {
      control: 'select',
      options: ['dark', 'light'] as DividerProps['view'][],
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    view: 'dark',
  },
};
