import { extendTheme } from "@chakra-ui/core";

const altimeaTheme = extendTheme({
    textStyles: {
        h1: {
            // you can also use responsive styles
            fontSize: ["24px", "36px"],
            fontWeight: "bold",
            lineHeight: "110%",
            letterSpacing: "-2%",
        },
        h2: {
            fontSize: ["20px", "24px"],
            fontWeight: "semibold",
            lineHeight: "110%",
            letterSpacing: "-1%",
        },
    },
    colors: {
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
});

export default altimeaTheme;
