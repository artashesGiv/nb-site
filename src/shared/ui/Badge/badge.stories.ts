import { Badge } from './badge';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Shared/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: 'Badge',
  },
};
