
interface InputProps {
    primary?: boolean;
    type?: 'text' | 'date' | 'search';
    label: string;
    onClick?: () => void;
}

export const InputComponent = ({
    type = 'text',
    label,
    ...props
}: InputProps) => {
    return (
        <div
            {...props}
            className="w-10/12 h-full py-0 px-1 relative flex flex-col"
        >
            <label
                data-cy="input-label"
                className="text-zinc-500 font-normal"
            >
                {label}
            </label>
            <input
                type={type}
                className="border-none text-gray-700 font-semibold focus:outline-none mb-8"
            />
        </div>

    );
};
