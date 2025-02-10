import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from '@/entities/ProjectCard/ui/project-card';

const meta = {
  title: 'Entities/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProjectCard1: Story = {
  args: {
    href: '#',
    title: 'Test Title',
    src: 'https://placehold.co/800x400',
  },
};
