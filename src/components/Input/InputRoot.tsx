import { ReactNode } from "react";

type Sizes = 'small' | 'medium' | 'large';

interface InputRootProps {
    children: ReactNode,
    size?: Sizes,
}

const widths: Record<Sizes, string> = {
    'small': '220px',
    'medium': '420px',
    'large': '620px'
}

const InputRoot = ({ size = 'medium', children }: InputRootProps) => {

    return (
        <div 
            data-cy="input-container"
            className={` w-[220px] w-${widths[size]} h-[50px] border-gray-500 border rounded-md shadow flex`}
        >
            {children}
        </div>
    );
};

export { InputRoot };