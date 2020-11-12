import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../components/layout";
import { Box, Grid, Text } from "@chakra-ui/core";
import { useCountriesQuery } from "../integration/graphql";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    const [searchItem, setSearchItem] = useState<string>("");
    const [{ data, fetching, error }] = useCountriesQuery();
    return (
        <Box>
            <Layout
                title={searchItem ? "Results" : "Countries"}
                loading={fetching}
                getSearchItem={setSearchItem}
            >
                <Grid
                    my={4}
                    templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
                    gap={2}
                >
                    {!error &&
                        !!data &&
                        !!data.Country &&
                        data.Country.filter((country) =>
                            `${country.name.toLowerCase()}_${country.alpha2Code.toLowerCase()}`.includes(
                                searchItem.toLowerCase()
                            )
                        ).map((country) => (
                            <Box
                                key={country._id}
                                onClick={() => router.push(`${country._id}`)}
                                cursor="pointer"
                                borderWidth="1px"
                                borderRadius="sm"
                                overflow="hidden"
                                p={2}
                            >
                                <Text>
                                    {country.flag.emoji} {country.name} (
                                    {country.alpha2Code})
                                </Text>
                            </Box>
                        ))}
                </Grid>
            </Layout>
        </Box>
    );
};

export default Home;
