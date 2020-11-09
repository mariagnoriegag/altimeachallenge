import { Text } from "@chakra-ui/core";
import React, { FC } from "react";

interface HeaderProps {
    title?: string;
}

const Header: FC<HeaderProps> = ({ title }: HeaderProps) => {
    return (
        <Text as="h2" textStyle="h2">
            {title}
        </Text>
    );
};

export default Header;
