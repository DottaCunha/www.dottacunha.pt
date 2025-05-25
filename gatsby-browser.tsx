import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import "@fontsource-variable/inter";

import React from "react";
import { MantineProvider } from "@mantine/core";

import { theme, resolver } from "./src/theme";

export const wrapPageElement = ({ element }) => {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      {element}
    </MantineProvider>
  );
};
