import React from "react";

interface ButtonProps {
    children: React.ReactElement | Element | string;
    onClick?: () => void;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    leftIcon,
    rightIcon,
    children,
}: ButtonProps) => {
    return (
        <button onClick={onClick} type="button">
            <div>{leftIcon}</div>
            <div>{children}</div>
            <div>{rightIcon}</div>
        </button>
    );
};

export default Button;
