import React from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";

const Country: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <p>Country ID: {id}</p>
        </div>
    );
};

export async function getServerSideProps(context: NextPageContext) {
    const { id } = context.query;

    return {
        props: { id }, // will be passed to the page component as props
    };
}

export default Country;
