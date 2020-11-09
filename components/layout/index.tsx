// import { useRouter } from "next/router";
import React, { FC, ReactElement } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
    children: FC | ReactElement | ReactElement[] | Element[] | FC[];
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
    // const router = useRouter();

    return (
        <div>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <Header title="Países o país" />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
