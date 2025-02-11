import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['person', 'mention', 'password', 'comment'] as Icons[],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    value: '',
    placeholder: 'placeholder',
    onChange: value => {
      console.log(value);
    },
    icon: 'person',
  },
  render: args => {
    const [inputValue, setInputValue] = useState(args.value);
    const [isError, setIsError] = useState(true);

    return (
      <Input
        {...args}
        value={inputValue}
        isError={isError}
        onChange={setInputValue}
        onChangeIsError={setIsError}
      />
    );
  },
};
