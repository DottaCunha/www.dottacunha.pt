import React from "react";
import { em, Grid, Container } from "@mantine/core";

import { SectionImages } from "./SectionImages";
import { SectionHeading } from "./SectionHeading";

const layouts = [
  {
    heading: {
      span: { base: 12, xs: 4 },
    },
    images: {
      span: { base: 12, sm: 8 },
      cols: [
        {
          span: 8,
        },
        {
          span: 4,
        },
      ],
    },
  },
  {
    heading: {
      span: { base: 12, xs: 4 },
      offset: { base: 0, xs: 6, sm: 0 },
      order: { base: 1, sm: 2 },
    },
    images: {
      span: { base: 12, sm: 8 },
      order: { base: 2, sm: 1 },
      cols: [],
    },
  },
  {
    heading: {
      span: { base: 12, xs: 9 },
      offset: { base: 0, xs: 2 },
    },
    images: {
      span: { base: 12, sm: 10 },
      cols: [],
    },
  },
  {
    heading: {
      span: { base: 12, sm: 4 },
    },
    images: {
      span: { base: 12, sm: 8 },
      cols: [
        {
          span: 4,
        },
        {
          span: 8,
        },
      ],
    },
  },
] as const;

interface SectionProps {
  readonly index: number;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly images?: Array<string | null> | null;
}

export const Section = ({ index, title, body, images }: SectionProps) => (
  <Container px={{ base: em(12), xs: em(80) }}>
    <Grid gutter={em(40)}>
      <Grid.Col {...layouts[index].heading}>
        <SectionHeading index={index} title={title} body={body} />
      </Grid.Col>
      <Grid.Col {...layouts[index].images}>
        <SectionImages images={images} cols={layouts[index].images.cols} />
      </Grid.Col>
    </Grid>
  </Container>
);

export default Section;
