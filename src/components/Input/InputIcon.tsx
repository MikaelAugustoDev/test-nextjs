import { ElementType } from "react";

interface IconColors {
    color: string,
    bgColor?: string
}

interface InputIconProps {
    icon: ElementType,
    iconColors: IconColors,
    onClick?: () => void
}

const InputIcon = ({ icon: Icon, iconColors, onClick }: InputIconProps) => {

    return (
        <div 
            onClick={onClick} 
            data-cy="input-icon"
            className="w-2/12 h-full flex items-center justify-center "
        >
            <div
                className={`text-${iconColors.color} bg-${iconColors.bgColor} `}
            >
                <Icon />
            </div>
        </div>
    )
};

export { InputIcon };