import React from "react";

import { RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

import {
  ActionIcon,
  Box,
  Container,
  em,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";

import { Logo } from "../Logo/Logo";
import { LetsConnectButton } from "../LetsConnectButton/LetsConnectButton";

const year = new Date().getFullYear();

export const Footer = () => (
  <Box component="footer" bg="dark.1">
    <Container
      size="xl"
      px={{ base: em(12), xs: em(80) }}
      py={{ base: em(48), xs: em(80) }}
    >
      <Flex direction="column" gap={{ base: em(80), xs: em(64) }}>
        <Flex
          gap={em(32)}
          justify="space-between"
          direction={{ base: "column", xs: "row" }}
        >
          <Logo />
          <LetsConnectButton />
        </Flex>
        <Flex
          gap={em(32)}
          justify="space-between"
          align={{ base: "center", xs: "end" }}
          direction={{ base: "column-reverse", xs: "row" }}
        >
          <Text c="gray.1" size="sm">
            © {year} DOTTA & CUNHA, LDA. ALL RIGHTS RESERVED.
          </Text>
          <Group gap={em(16)} justify="flex-end" wrap="nowrap">
            <ActionIcon size="xl" color="white" variant="outline">
              <RxTwitterLogo />
            </ActionIcon>
            <ActionIcon size="xl" color="white" variant="outline">
              <RxInstagramLogo />
            </ActionIcon>
          </Group>
        </Flex>
      </Flex>
    </Container>
  </Box>
);
