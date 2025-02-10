import type { Meta, StoryObj } from '@storybook/react';
import { PartnerCard } from '@/entities/PartnerCard/ui/partner-card';

const meta = {
  title: 'Entities/PartnerCard',
  component: PartnerCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PartnerCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PartnerCard1: Story = {
  args: {
    href: '#',
    src: 'https://placehold.co/200x100',
  },
};
