import React from "react";
import { em, Flex, Stack } from "@mantine/core";
import { graphql, PageProps } from "gatsby";

import { MainLayout } from "../layouts";
import { Heading, Hero, Section } from "../components";

export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        sections {
          title
          body
          images
        }
      }
    }
  }
`;

export default function ({ data }: PageProps<Queries.HomePageQuery>) {
  const { title, sections } = data.markdownRemark?.frontmatter ?? {};

  return (
    <MainLayout>
      <Hero />
      <Stack py={em(164)} gap={em(164)}>
        <Heading order={2} tt="uppercase">
          {title}
        </Heading>
        <Flex gap={{ base: em(80), xs: em(164) }} direction="column">
          {sections?.map((section, index) => (
            <Section index={index} {...section} />
          ))}
        </Flex>
      </Stack>
    </MainLayout>
  );
}
