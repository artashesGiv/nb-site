import { YandexMap } from './yandex-map';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Entities/YandexMap',
  component: YandexMap,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof YandexMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    center: [55.751574, 37.573856],
  },
};
