import React from "react";

interface ButtonProps {
    children: React.ReactElement | Element | string;
    onClick?: () => void;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
    return <button>{children}</button>;
};

export default Button;
