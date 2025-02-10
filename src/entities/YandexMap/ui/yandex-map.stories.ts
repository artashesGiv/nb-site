import type { Meta, StoryObj } from '@storybook/react';
import { YandexMap } from '@/entities/YandexMap/ui/yandex-map';

const meta = {
  title: 'Entities/YandexMap',
  component: YandexMap,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof YandexMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const YandexMap1: Story = {
  args: {
    center: [55.751574, 37.573856],
  },
};
