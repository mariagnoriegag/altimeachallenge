import React from "react";
import Head from "next/head";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Países</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>Index Page</p>
            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <img src="/vercel.svg" alt="Vercel Logo" />
                </a>
            </footer>
        </div>
    );
};

export default Home;
