import { useRouter } from "next/router";
import React, { FC, ReactElement, useEffect } from "react";

interface LayoutProps {
    children: FC | ReactElement | ReactElement[] | Element[] | FC[];
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
    const router = useRouter();

    return (
        <div>
            <div>{children}</div>
        </div>
    );
};

export default Layout;
