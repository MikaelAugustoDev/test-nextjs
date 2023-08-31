import type { Meta, StoryObj } from '@storybook/react';

import { InputTest } from '../components/InputTest';

const meta: Meta = {
    title: 'InputTest',
    component: InputTest,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

type Story = StoryObj<typeof InputTest>;

export const InputElementStorie: Story = {
    render: () => {
        return (
            <InputTest />
        );
    }
}

export default meta
