import React from "react";
import type { AppProps } from "next/app";
import { createClient, Provider as URQLProvider } from "urql";
import LayoutState from "../lib/globalstate";
import { ChakraProvider } from "@chakra-ui/core";
import altimeaTheme from "../theming/theme";

const client = createClient({
    url: "https://countries-274616.ew.r.appspot.com/",
});

const MauthApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <LayoutState.Provider>
            <URQLProvider value={client}>
                <ChakraProvider resetCSS theme={altimeaTheme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </URQLProvider>
        </LayoutState.Provider>
    );
};

export default MauthApp;
