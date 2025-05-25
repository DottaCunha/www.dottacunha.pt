import clsx from "clsx";
import { Link } from "gatsby";
import * as React from "react";
import { useDisclosure } from "@mantine/hooks";
import { RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";

import {
  em,
  Box,
  Flex,
  Group,
  Stack,
  Burger,
  Button,
  Drawer,
  Container,
  ActionIcon,
} from "@mantine/core";

import { Logo } from "../Logo/Logo";
import * as classes from "./Navbar.module.css";

import { LetsConnectButton } from "../LetsConnectButton/LetsConnectButton";

const actions = [
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/projects",
    label: "Projects",
  },
  {
    to: "/insights",
    label: "Insights",
  },
  {
    to: "/contact",
    label: "Contact Us",
  },
];

const socials = [
  {
    to: "/twitter",
    Icon: RxTwitterLogo,
  },
  {
    to: "/intagram",
    Icon: RxInstagramLogo,
  },
];

export const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <>
      <Box className={clsx(classes.wrapper)}>
        <Container className={classes.container}>
          <Flex component="nav" className={classes.navbar}>
            <Logo
              w={{ base: em(48), xs: em(81) }}
              style={opened ? { filter: "invert(1)" } : {}}
            />
            <Group visibleFrom="sm" gap={em(16)}>
              {actions.map(({ to, label }) => (
                <Button
                  to={to}
                  tt="uppercase"
                  variant="subtle"
                  component={Link}
                >
                  {label}
                </Button>
              ))}
            </Group>
            <Group
              visibleFrom="sm"
              gap={em(16)}
              justify="flex-end"
              wrap="nowrap"
            >
              {socials.map(({ to, Icon }) => (
                <ActionIcon
                  to={to}
                  size="xl"
                  color="white"
                  variant="subtle"
                  component={Link}
                >
                  <Icon />
                </ActionIcon>
              ))}
            </Group>
            <Burger
              color={opened ? "black" : "white"}
              hiddenFrom="sm"
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
            />
          </Flex>
        </Container>
      </Box>

      <Drawer.Root position="top" size="100%" opened={opened} onClose={close}>
        <Drawer.Content h="100%" pt={em(96)}>
          <Drawer.Body h="100%" p={0}>
            <Container h="100%" className={classes.container}>
              <Stack h="100%">
                <Stack flex={1} justify="center" align="start">
                  {actions.map(({ to, label }) => (
                    <Button
                      to={to}
                      size="xl"
                      tt="uppercase"
                      color="black"
                      variant="subtle"
                      component={Link}
                    >
                      {label}
                    </Button>
                  ))}
                </Stack>
                <LetsConnectButton color="black" />
              </Stack>
            </Container>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};
