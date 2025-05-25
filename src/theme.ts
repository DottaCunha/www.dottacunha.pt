import {
  ActionIcon,
  Burger,
  Button,
  Container,
  createTheme,
  CSSVariablesResolver,
  em,
  rem,
  Text,
  Title,
} from "@mantine/core";

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-color-text": theme.colors.gray[0],
  },
  light: {},
  dark: {},
});

export const theme = createTheme({
  breakpoints: {
    xs: em(1024),
    sm: em(1440),
    // md: em(1440),
  },
  primaryColor: "gray",
  colors: {
    dark: [
      "#121212",
      "#121212",
      "#121212",
      "#121212",
      "#121212",
      "#121212",
      "#121212",
      "#121212",
      "#121212",
      "#121212",
    ],
    gray: [
      "#8D8D8D",
      "#8D8D8D",
      "#8D8D8D",
      "#8D8D8D",
      "#8D8D8D",
      "#8D8D8D",
      "#8D8D8D",
      "#8D8D8D",
      "#8D8D8D",
      "#8D8D8D",
    ],
  },
  spacing: {
    xs: rem(12),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(64),
  },
  fontSizes: {
    // xs: '0.5rem',
    // sm: '0.75rem',
    md: rem(15),
    // lg: em(18), //'1.25rem',
    // xl: '1.5rem',
  },
  lineHeights: {
    // xs: '1.4',
    // sm: '1.45',
    md: "1.5",
    // lg: '1.6',
    // xl: '1.65',
  },
  defaultRadius: 0,
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Inter Variable', sans-serif",
    sizes: {
      h1: {
        fontSize: rem(100),
        fontWeight: "300",
        lineHeight: "1.1",
      },
      h2: {
        fontSize: rem(80),
        fontWeight: "200",
        lineHeight: "1.1",
      },
      h5: {
        fontSize: rem(32),
        fontWeight: "200",
        lineHeight: "1.2",
      },
      h6: {
        fontSize: rem(24),
        fontWeight: "200",
        lineHeight: "1.2",
      },
    },
  },
  components: {
    Text: Text.extend({}),
    Container: Container.extend({
      defaultProps: {
        size: "xl",
      },
    }),
    Burger: Burger.extend({
      vars: () => ({
        root: {
          "--burger-size": "28px",
        },
      }),
    }),
    Button: Button.extend({
      defaultProps: {
        color: "white",
        variant: "outline",
        py: em(13),
        px: em(15),
      },
      styles: {
        inner: {
          justifyContent: "end",
        },
        label: {
          fontWeight: "400",
          textTransform: "uppercase",
        },
      },
      // vars: () => ({
      //   root: {
      //     "--button-height"
      //   }
      // })
    }),
  },
});
