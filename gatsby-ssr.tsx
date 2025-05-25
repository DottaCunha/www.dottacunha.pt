import React from "react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { theme, resolver } from "./src/theme";

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  replaceHeadComponents([
    ...headComponents,
    <ColorSchemeScript key="color-scheme-script" />,
  ]);
};

export const wrapPageElement = ({ element }) => {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      {element}
    </MantineProvider>
  );
};
