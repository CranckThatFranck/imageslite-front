import React from "react";

interface ButtonProps {
    color?: 'blue' | 'red' | 'yellow' | 'stone' | 'gray';
    label?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "button" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = ({
    onClick, color = 'blue', label, type
} : ButtonProps) => {
    const colorClasses: Record<NonNullable<ButtonProps['color']>, string> = {
        blue: 'bg-blue-500 hover:bg-blue-300',
        red: 'bg-red-500 hover:bg-red-300',
        yellow: 'bg-yellow-500 hover:bg-yellow-300',
        stone: 'bg-stone-600 hover:bg-stone-500',
        gray: 'bg-gray-500 hover:bg-gray-400',
    };

    return (
        <button
            type={type}
            className={`${colorClasses[color]} text-white px-4 py-2 rounded-lg`}
            onClick={onClick}
        >
            { label }
        </button>
    )
}