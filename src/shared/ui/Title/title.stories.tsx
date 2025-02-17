import type { Meta, StoryObj } from '@storybook/react';
import { Title, type TitleProps } from './title';

const meta = {
  title: 'Shared/Title',
  component: Title,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['h1', 'h2'] as TitleProps['type'][],
    },
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: 'Title',
    type: 'h1',
  },
};
