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
    InputRightElement,
    Select,
    Text,
    useColorMode,
} from "@chakra-ui/core";
import { Currency, Language, Region } from "../../integration/graphql";
import { SearchIcon } from "../icons";

interface LayoutProps {
    title: string;
    loading?: boolean;
    error?: string | any;
    languages?: Language[];
    currencies?: Currency[];
    regions?: Region[];
    getSearchItem?: (name: string) => void;
    children: FC | ReactElement | ReactElement[] | Element[] | FC[];
}

const Layout: FC<LayoutProps> = ({
    title,
    loading,
    error,
    children,
    getSearchItem,
    languages,
    currencies,
    regions,
}: LayoutProps) => {
    const { setLoading } = LayoutState.useContainer();
    const { colorMode, toggleColorMode } = useColorMode();
    const [language, setLanguage] = useState<string>();
    const [currency, setCurrency] = useState<string>();
    const [region, setRegion] = useState<string>();

    useEffect(() => {
        if (loading !== undefined) setLoading(loading);
    }, [loading]);

    return (
        <Box m={[6, 10]}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <Flex justifyContent="space-between" alignItems="flex-end" mb={6}>
                <Text as="h1" textStyle="h1">
                    Search countries
                </Text>
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
            </Flex>
            <HStack my={4}>
                <Select
                    variant="filled"
                    placeholder="Idioma"
                    size="sm"
                    onChange={(e) =>
                        /* setLanguage(e.target.value) */ console.log(e)
                    }
                    value={language}
                />
                <Select
                    variant="filled"
                    placeholder="Moneda"
                    size="sm"
                    onChange={(e) =>
                        /* setCurrency(e.target.value) */ console.log(e)
                    }
                    value={currency}
                />
                <Select
                    variant="filled"
                    placeholder="Región"
                    size="sm"
                    onChange={(e) =>
                        /* setRegion(e.target.value) */ console.log(e)
                    }
                    value={region}
                />
            </HStack>
            <Flex gridColumnGap={4} mb={6}>
                <IconButton
                    icon={<SearchIcon />}
                    isLoading={loading}
                    colorScheme="blue"
                    aria-label="button"
                />
                <InputGroup>
                    <Input
                        px={4}
                        type="text"
                        placeholder="Search country"
                        onChange={(e) => getSearchItem(e.target.value)}
                    />
                </InputGroup>
            </Flex>

            <Header title={title} />
            <main>{children}</main>
            <Footer>{error && error.name}</Footer>
        </Box>
    );
};

export default Layout;
