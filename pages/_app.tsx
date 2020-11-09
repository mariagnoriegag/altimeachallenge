import React from "react";
import type { AppProps } from "next/app";
import { createClient, Provider as URQLProvider } from "urql";

const client = createClient({
    url: "https://countries-274616.ew.r.appspot.com/",
});

const MauthApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <URQLProvider value={client}>
            <Component {...pageProps} />
        </URQLProvider>
    );
};

export default MauthApp;
