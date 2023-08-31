import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../components/Input';

const meta: Meta = {
    title: 'Input',
    component: Input.Root,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

type Story = StoryObj<typeof Input>;

export const InputElementStorie: Story = {
    render: () => {
        return (
            <Input.Root size="small">
                <Input.Component label='CPF' type='text' />
            </Input.Root>
        );
    }
}

export const Large: Story = {
    render: () => {
        return (
            <Input.Root size="medium">
                <Input.Component label='CPF' type='text' />
            </Input.Root>
        );
    }
};

export const Small: Story = {
    render: () => {
        return (
            <Input.Root size="large">
                <Input.Component label='CPF' type='text' />
            </Input.Root>
        );
    }
};

export default meta;