import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import React from "react";

const Country: NextPage = () => {
    const router = useRouter();
    const { oid } = router.query;

    return (
        <div>
            <p>Organization ID: {oid}</p>
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
