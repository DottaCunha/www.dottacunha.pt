import React from "react";
import { em, Box, BoxProps } from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";

export const Logo = (props: BoxProps) => (
  <Box w={{ base: em(48), xs: em(162) }} {...props}>
    <StaticImage src="./Logo.svg" alt="Logo" color="black" />
  </Box>
);
