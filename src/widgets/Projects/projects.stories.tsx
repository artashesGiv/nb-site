import type { Meta, StoryObj } from '@storybook/react';
import { Projects } from './projects';

const meta = {
  title: 'AUTO/Projects',
  component: Projects,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Projects>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
