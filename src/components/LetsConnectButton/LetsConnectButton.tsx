import React from "react";
import { em, Button, ButtonProps } from "@mantine/core";
import { MdArrowOutward } from "react-icons/md";

export const LetsConnectButton = (props: ButtonProps) => (
  <Button
    size="lg"
    w={{ base: "100%", xs: em(548) }}
    rightSection={<MdArrowOutward />}
    {...props}
  >
    Let's Connect
  </Button>
);
