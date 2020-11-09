import React from "react";
import { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
    return (
        <div>
            <Layout title={"Países"}>
                <p>Index Page</p>
            </Layout>
        </div>
    );
};

export default Home;
