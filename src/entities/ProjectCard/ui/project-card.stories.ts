import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from '@/entities/ProjectCard/ui/project-card';

const meta = {
  title: 'Shared/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProjectCard1: Story = {
  args: {
    children: 'Test Card',
    href: '#',
    title: 'Test Title',
    url: 'https://placehold.co/800x400',
  },
};
