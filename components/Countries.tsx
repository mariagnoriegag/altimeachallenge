import React from "react";
import { Box, Grid, Text } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { CountriesQuery } from "../integration/graphql";

interface CountriesProps {
    data: CountriesQuery;
    searchCountry: string;
    language: string;
    currency: string;
    region: string;
    onRoute: () => void;
}

const Countries: React.FC<CountriesProps> = ({
    data,
    searchCountry,
    language,
    currency,
    region,
    onRoute,
}: CountriesProps) => {
    const router = useRouter();
    return (
        <Grid
            my={4}
            templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
            gap={2}
        >
            {!!data &&
                !!data.Country &&
                data.Country.filter((country) => {
                    const chain =
                        country.name.toLowerCase() +
                        "_" +
                        country.alpha2Code.toLowerCase() +
                        "_" +
                        country.subregion?.region._id +
                        "_" +
                        country.officialLanguages
                            .map((lang) => {
                                return lang._id;
                            })
                            .join("-") +
                        "_" +
                        country.currencies
                            .map((curr) => {
                                return curr._id;
                            })
                            .join("-");
                    return (
                        chain.includes(searchCountry.toLowerCase()) &&
                        chain.includes(region) &&
                        chain.includes(language) &&
                        chain.includes(currency)
                    );
                }).map((country) => (
                    <Box
                        key={country._id}
                        onClick={() => {
                            router.push(`${country._id}`);
                            onRoute();
                        }}
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
    );
};

export default Countries;
