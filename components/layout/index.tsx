import React, { FC, ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import LayoutState from "../../lib/globalstate";
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Input,
    InputGroup,
    Select,
    Text,
    useColorMode,
} from "@chakra-ui/core";
import {
    CountriesQuery,
    useCountriesQuery,
    useCurrenciesQuery,
    useLanguagesQuery,
    useRegionsQuery,
} from "../../integration/graphql";
import { SearchIcon } from "../icons";

interface LayoutProps {
    title: string;
    getCountries: (countries: CountriesQuery) => void;
    getSearchItem: (name: string) => void;
    getRegion: (name: string) => void;
    getCurrency: (name: string) => void;
    getLanguage: (name: string) => void;
    children: FC | ReactElement | ReactElement[] | Element[] | FC[];
    searchItem: string;
    region: string;
    currency: string;
    language: string;
}

const Layout: FC<LayoutProps> = ({
    title,
    children,
    getSearchItem,
    getCountries,
    getRegion,
    getCurrency,
    getLanguage,
    searchItem,
    region,
    currency,
    language,
}: LayoutProps) => {
    const { setLoading } = LayoutState.useContainer();
    const { colorMode, toggleColorMode } = useColorMode();
    const [
        { data: countries, fetching: lCountries, error: eCountries },
    ] = useCountriesQuery();
    const [
        { data: languages, fetching: lLanguages, error: eLanguages },
    ] = useLanguagesQuery();
    const [
        { data: currencies, fetching: lCurrencies, error: eCurrencies },
    ] = useCurrenciesQuery();
    const [
        { data: regions, fetching: lRegions, error: eRegions },
    ] = useRegionsQuery();

    useEffect(() => {
        if (lCountries !== undefined) setLoading(lCountries);
    }, [lCountries]);

    useEffect(() => {
        if (countries !== undefined) if (getCountries) getCountries(countries);
    }, [countries]);

    return (
        <Box m={[6, 10]}>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <Flex justifyContent="space-between" alignItems="flex-end" mb={6}>
                <Text colorScheme="teal" as="h1" textStyle="h1">
                    Maria Noriega
                </Text>
                <Button onClick={toggleColorMode} colorScheme="teal">
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
            </Flex>
            <HStack my={4}>
                <Select
                    defaultValue={language}
                    variant="filled"
                    placeholder="Language"
                    size="sm"
                    onChange={(e) => getLanguage(e.target.value)}
                    value={language}
                >
                    {!eLanguages &&
                        !!languages &&
                        languages.Language.map((lang) => (
                            <option key={lang._id} value={lang._id}>
                                {lang.name} | {lang.nativeName}
                            </option>
                        ))}
                </Select>
                <Select
                    defaultValue={currency}
                    variant="filled"
                    placeholder="Currency"
                    size="sm"
                    onChange={(e) => getCurrency(e.target.value)}
                    value={currency}
                >
                    {!eCurrencies &&
                        !!currencies &&
                        currencies.Currency.map((curr) => (
                            <option key={curr._id} value={curr._id}>
                                {curr.code} {curr.name} ({curr.symbol})
                            </option>
                        ))}
                </Select>
                <Select
                    defaultValue={region}
                    variant="filled"
                    placeholder="Region"
                    size="sm"
                    onChange={(e) => getRegion(e.target.value)}
                    value={region}
                >
                    {!eRegions &&
                        !!regions &&
                        regions.Region.map((regi) => (
                            <option key={regi._id} value={regi._id}>
                                {regi.name}
                            </option>
                        ))}
                </Select>
            </HStack>
            <Flex gridColumnGap={1} mb={6}>
                <IconButton
                    icon={<SearchIcon />}
                    isLoading={lCountries}
                    colorScheme="gray"
                    aria-label="button"
                />
                <InputGroup>
                    <Input
                        defaultValue={searchItem}
                        px={4}
                        type="text"
                        placeholder="Search country"
                        onChange={(e) => getSearchItem(e.target.value)}
                        value={searchItem}
                    />
                </InputGroup>
            </Flex>
            <main>{children}</main>
            <Footer>{eCountries && eCountries.name}</Footer>
        </Box>
    );
};

export default Layout;
