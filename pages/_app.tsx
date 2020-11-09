import React from "react";
import type { AppProps } from "next/app";
import { createClient, Provider as URQLProvider } from "urql";
import LayoutState from "../lib/globalstate";

const client = createClient({
    url: "https://countries-274616.ew.r.appspot.com/",
});

const MauthApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <LayoutState.Provider>
            <URQLProvider value={client}>
                <Component {...pageProps} />
            </URQLProvider>
        </LayoutState.Provider>
    );
};

export default MauthApp;
