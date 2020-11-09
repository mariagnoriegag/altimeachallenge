import React, { FC } from "react";
import Nav from "./Nav";

interface HeaderProps {
    title?: string;
}

const Header: FC<HeaderProps> = ({ title }: HeaderProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <Nav />
        </div>
    );
};

export default Header;
