import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../components/layout";
import { Box } from "@chakra-ui/core";
import { CountriesQuery } from "../integration/graphql";
import Countries from "../components/Countries";
import Header from "../components/Header";

const Home: NextPage = () => {
    const [searchItem, setSearchItem] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [currency, setCurrency] = useState<string>("");
    const [region, setRegion] = useState<string>("");
    const [countriesData, setCountries] = useState<CountriesQuery>();
    return (
        <Box>
            <Layout
                title={searchItem ? "Results" : "All countries"}
                getSearchItem={setSearchItem}
                getCountries={setCountries}
                getLanguage={setLanguage}
                getCurrency={setCurrency}
                getRegion={setRegion}
                searchItem={searchItem}
                region={region}
                currency={currency}
                language={language}
            >
                <Header title={searchItem ? "Results" : "All countries"} />
                <Countries
                    data={countriesData}
                    searchCountry={searchItem}
                    language={language}
                    currency={currency}
                    region={region}
                    onRoute={() => {
                        setSearchItem("");
                        setLanguage("");
                        setCurrency("");
                        setRegion("");
                    }}
                />
            </Layout>
        </Box>
    );
};

export default Home;
