import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMobileMenu } from './header-mobile-menu';

const meta = {
  title: 'Widgets/HeaderMobile',
  component: HeaderMobileMenu,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof HeaderMobileMenu>;

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
