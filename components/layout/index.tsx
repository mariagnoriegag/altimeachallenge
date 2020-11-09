import React, { FC, ReactElement, useEffect } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import LayoutState from "../../lib/globalstate";

interface LayoutProps {
    title: string;
    loading?: boolean;
    error?: string | any;
    children: FC | ReactElement | ReactElement[] | Element[] | FC[];
}

const Layout: FC<LayoutProps> = ({
    title,
    loading,
    error,
    children,
}: LayoutProps) => {
    const { setLoading } = LayoutState.useContainer();

    useEffect(() => {
        if (loading !== undefined) setLoading(loading);
    }, [loading]);

    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <div>{loading && "Cargando ..."}</div>
            <Header title={title} />
            <main>{children}</main>
            <Footer>{error && error.name}</Footer>
        </div>
    );
};

export default Layout;
