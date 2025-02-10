import type { Meta, StoryObj } from '@storybook/react';
import { Collapse } from '@/shared/ui/Collapse/collapse';

const meta = {
  title: 'Shared/Collapse',
  component: Collapse,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Collapse1: Story = {
  args: {
    children: ['Test Collapse', 'Collapsed text'],
  },
};
