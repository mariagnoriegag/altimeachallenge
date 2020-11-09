import React from "react";
import type { AppProps } from "next/app";
import { createClient, Provider as URQLProvider } from "urql";
import { ThemeProvider } from "theme-ui";
import theme from "../src/theme";

const client = createClient({
    url: "https://countries-274616.ew.r.appspot.com/",
});

const MauthApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <URQLProvider value={client}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </URQLProvider>
    );
};

export default MauthApp;
