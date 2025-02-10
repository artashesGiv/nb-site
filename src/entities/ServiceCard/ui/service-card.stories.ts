import { ServiceCard } from '@/entities/ServiceCard/ui/service-card';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Entities/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ServiceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ServiceCard1: Story = {
  args: {
    src: 'https://placehold.co/80x80',
    title: 'Государственные информационные системы',
    content: 'ive centuries, but also the leap into electronic t',
  },
};
