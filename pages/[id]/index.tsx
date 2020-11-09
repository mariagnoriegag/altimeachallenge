import React from "react";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { AltimeaPage } from "../../lib/altimea";
import { useCountryQuery } from "../../integration/graphql";

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
                    ? !data.Country[0] ? "No existe en la base de datos"
                    : `${data.Country[0].flag.emoji} ${data.Country[0].name}` : "No se encontró"
            }
            loading={fetching}
            error={error}
        >
            <p>{!data ? id : !error ? !data.Country[0] ? "" : data.Country[0].name : ""}</p>
            {!error && !!data && !!data.Country[0] && (
                <div>
                    <div>Native name: {data.Country[0].nativeName}</div>
                    <div>Alpha2Code: {data.Country[0].alpha2Code}</div>
                    <div>
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
                    </div>
                    <div>Area: {data.Country[0].area} Km2</div>
                    <div>
                        Population: {data.Country[0].population / 1000000}{" "}
                        millones
                    </div>
                    <div>Capital: {data.Country[0].capital}</div>
                    <div>
                        Location:
                        <div style={{ marginLeft: 20 }}>
                            <div>
                                Latitude: {data.Country[0].location.latitude}
                            </div>
                            <div>
                                Longitude: {data.Country[0].location.longitude}
                            </div>
                        </div>
                    </div>
                    <div>Numeric code: {data.Country[0].numericCode}</div>
                    <div>Subregion: {data.Country[0].subregion.name}</div>
                    <div>Region: {data.Country[0].subregion.region.name}</div>
                    <div>
                        Currencies:
                        {data.Country[0]["currencies"].map((currency, i) => (
                            <div key={i} style={{ marginLeft: 20 }}>
                                <div>
                                    {currency.name} | {currency.symbol}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        Official Languages:
                        {data.Country[0]["officialLanguages"].map(
                            (language, i) => (
                                <div key={i} style={{ marginLeft: 20 }}>
                                    <div>
                                        {language.name} | {language.nativeName}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <div>
                        Calling codes:
                        {data.Country[0]["callingCodes"].map((code, i) => (
                            <div key={i} style={{ marginLeft: 20 }}>
                                <div>{code.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
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
