import type { Meta, StoryObj } from '@storybook/react';
import { CardBase } from '@/shared/ui/CardBase/card-base';

const meta = {
  title: 'Shared/CardBase',
  component: CardBase,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardBase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardSizeS: Story = {
  args: {
    children: 'Test Card',
    size: 's',
  },
};

export const CardSizeM: Story = {
  args: {
    children: 'Test Card',
    size: 'm',
  },
};

export const CardSizeL: Story = {
  args: {
    children: 'Test Card',
    size: 'l',
  },
};
