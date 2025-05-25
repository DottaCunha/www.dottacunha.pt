import React from "react";
import { rem, Title, TitleProps, Container } from "@mantine/core";

import * as classes from "./Heading.module.css";

interface HeadingProps extends TitleProps {}

export const Heading = (props: HeadingProps) => (
  <Container
    size="xl"
    px={{ base: rem(12), xs: rem(80) }}
    className={classes.container}
  >
    <Title className={classes.title} {...props} />
  </Container>
);

export default Heading;
