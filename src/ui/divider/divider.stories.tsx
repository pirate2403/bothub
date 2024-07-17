import { Meta, type StoryObj } from '@storybook/react';
import { Divider } from '.';

const meta: Meta = {
  title: 'Example/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
