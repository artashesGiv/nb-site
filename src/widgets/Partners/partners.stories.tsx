import type { Meta, StoryObj } from '@storybook/react';
import { Partners } from './partners';

const meta = {
  title: 'Widgets/Partners',
  component: Partners,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Partners>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
