import React, { FC } from "react";
import Nav from "./Nav";

interface HeaderProps {
    title?: string;
}

const Header: FC<HeaderProps> = ({ title }: HeaderProps) => {
    return (
        <div>
            <Nav />
            <h1>{title}</h1>
        </div>
    );
};

export default Header;
