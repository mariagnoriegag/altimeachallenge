import React, { FC } from "react";

interface FooterProps {
    children: React.ReactElement | Element | string;
}

const Footer: React.FC<FooterProps> = ({ children }: FooterProps) => {
    return (
        <footer>
            <h2>footer</h2>
            {children && (
                <>
                    <div>Error: </div>
                    <div>{children}</div>
                </>
            )}
        </footer>
    );
};

export default Footer;
