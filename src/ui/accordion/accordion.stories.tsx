import { Meta, type StoryObj } from '@storybook/react';
import { Accordion } from '.';

const meta: Meta<typeof Accordion> = {
  title: 'Example/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: Story => (
    <div style={{ width: '400px', height: '200px' }}>
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Accordion',
    kind: 'primary',
    children: <p>Какие сферы бизнеса могут воспользоваться ChatGPT?</p>,
  },
};

export const Secondary: Story = {
  args: {
    title: 'Accordion',
    kind: 'secondary',
    children: <p>Какие сферы бизнеса могут воспользоваться ChatGPT?</p>,
  },
};
