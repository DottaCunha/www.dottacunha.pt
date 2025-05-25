import React from "react";
import { em, Text, Title, Stack, StackProps } from "@mantine/core";

interface SectionHeadingProps extends StackProps {
  index: number;
  title?: string;
  body?: string;
}

export const SectionHeading = ({
  index,
  title,
  body,
  ...props
}: SectionHeadingProps) => (
  <Stack h="100%" gap={em(32)} justify="end" {...props}>
    <Title size="h6" c="gray.5">
      {String(index + 1).padStart(2, "0")}
    </Title>
    <Stack gap={em(16)}>
      <Title size="h5" c="dark" tt="uppercase">
        {title}
      </Title>
      <Text c="gray.5">{body}</Text>
    </Stack>
  </Stack>
);
