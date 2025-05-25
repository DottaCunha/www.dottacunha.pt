import React from "react";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "storybook-addon-gatsby",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    '@storybook/addon-styling-webpack',
    'storybook-dark-mode',
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {}
};
export default config;
