import type { Meta, StoryObj } from '@storybook/react';

import { HeaderMobile } from './header-mobile';

const meta = {
  title: 'Widgets/HeaderMobile',
  component: HeaderMobile,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof HeaderMobile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    links: [
      { to: 'about', text: 'О компании' },
      { to: 'services', text: 'Услуги' },
      { to: 'projects', text: 'Проекты' },
      { to: 'contacts', text: 'Контакты' },
    ],
  },
};
