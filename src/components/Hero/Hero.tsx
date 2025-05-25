import React from "react";

import {
  em,
  Space,
  Stack,
  Title,
  Container,
  BackgroundImage,
} from "@mantine/core";

import background from "./hero.jpeg";
import * as classes from "./Hero.module.css";
import { LetsConnectButton } from "../LetsConnectButton/LetsConnectButton";

const title = "Leading property investment";

interface HeroProps {}

export const Hero = ({}: HeroProps) => (
  <BackgroundImage src={background} h={{ sm: em(824), base: em(664) }}>
    <Container
      h="100%"
      px={{ base: em(12), xs: em(80) }}
      py={{ base: em(64), xs: em(80) }}
    >
      <Stack gap="md" h="100%">
        <Space flex={1} />
        <Title c="white" tt="uppercase" fz={{ base: em(48), xs: em(100) }}>
          {title}
        </Title>
        <LetsConnectButton maw={em(417)} />
      </Stack>
    </Container>
  </BackgroundImage>
);
