import { Meta, type StoryObj } from '@storybook/react';
import { Dropdown } from '.';

const meta: Meta = {
  title: 'Example/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Dropdown',
    children: <div>Dropdown Menu</div>,
    position: 'left',
  },
};
