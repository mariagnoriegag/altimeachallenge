import React from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Country: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout title={id.toString()}>
            <p>Country ID: {id}</p>
        </Layout>
    );
};

export async function getServerSideProps(context: NextPageContext) {
    const { id } = context.query;

    return {
        props: { id }, // will be passed to the page component as props
    };
}

export default Country;
