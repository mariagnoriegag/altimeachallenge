import React from "react";

interface FooterProps {
    children: React.ReactElement | Element | string;
}

const Footer: React.FC<FooterProps> = ({ children }: FooterProps) => {
    return (
        <footer>
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
