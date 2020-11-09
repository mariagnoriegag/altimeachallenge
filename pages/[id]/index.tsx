import React from "react";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { AltimeaPage } from "../../lib/altimea";
import { useCountryQuery } from "../../integration/graphql";
import { Box, Text } from "@chakra-ui/core";

const Country: AltimeaPage = ({
    id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
    const [{ data, fetching, error }] = useCountryQuery({
        variables: { id: id },
    });

    return (
        <Layout
            title={
                !data
                    ? id
                    : !error
                    ? !data.Country[0]
                        ? "No existe en la base de datos"
                        : `${data.Country[0].flag.emoji} ${data.Country[0].name}`
                    : "No se encontró"
            }
            loading={fetching}
            error={error}
        >
            {!error && !!data && !!data.Country[0] && (
                <Box py={4}>
                    <Text>Native name: {data.Country[0].nativeName}</Text>
                    <Text>Alpha2Code: {data.Country[0].alpha2Code}</Text>
                    <Text>
                        Alternative spellings:{" "}
                        {data.Country[0]["alternativeSpellings"].map(
                            (spelling, i) => (
                                <span key={i}>
                                    {spelling.name}
                                    {data.Country[0]["alternativeSpellings"]
                                        .length !==
                                        i + 1 && ", "}
                                </span>
                            )
                        )}
                    </Text>
                    <Text>Area: {data.Country[0].area} Km2</Text>
                    <Text>
                        Population: {data.Country[0].population / 1000000}{" "}
                        millones
                    </Text>
                    <Text>Capital: {data.Country[0].capital}</Text>
                    <Text>
                        Location:
                        <Text style={{ marginLeft: 20 }}>
                            <Text>
                                Latitude: {data.Country[0].location.latitude}
                            </Text>
                            <Text>
                                Longitude: {data.Country[0].location.longitude}
                            </Text>
                        </Text>
                    </Text>
                    <Text>Numeric code: {data.Country[0].numericCode}</Text>
                    <Text>Subregion: {data.Country[0].subregion.name}</Text>
                    <Text>Region: {data.Country[0].subregion.region.name}</Text>
                    <Text>
                        Currencies:
                        {data.Country[0]["currencies"].map((currency, i) => (
                            <Text key={i} style={{ marginLeft: 20 }}>
                                <Text>
                                    {currency.name} | {currency.symbol}
                                </Text>
                            </Text>
                        ))}
                    </Text>
                    <Text>
                        Official Languages:
                        {data.Country[0]["officialLanguages"].map(
                            (language, i) => (
                                <Text key={i} style={{ marginLeft: 20 }}>
                                    <Text>
                                        {language.name} | {language.nativeName}
                                    </Text>
                                </Text>
                            )
                        )}
                    </Text>
                    <Text>
                        Calling codes:
                        {data.Country[0]["callingCodes"].map((code, i) => (
                            <Text key={i} style={{ marginLeft: 20 }}>
                                <Text>{code.name}</Text>
                            </Text>
                        ))}
                    </Text>
                </Box>
            )}
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.query["id"];

    return {
        props: { id },
    };
};

export default Country;
