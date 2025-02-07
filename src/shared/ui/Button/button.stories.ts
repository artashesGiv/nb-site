import { Button } from './button'
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    children: 'Button',
  },
}
