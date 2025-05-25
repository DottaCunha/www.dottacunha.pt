import React from "react";
import { Carousel } from "@mantine/carousel";
import { em, Grid, Image, GridColProps } from "@mantine/core";

interface SectionImagesProps {
  cols?: GridColProps[];
  readonly images?: Array<string | null> | null;
}

export const SectionImages = ({ images, cols }: SectionImagesProps) => {
  return images ? (
    images.length > 1 ? (
      <>
        <Carousel hiddenFrom="xs" withControls={false} withIndicators>
          {images.map((image) => (
            <Carousel.Slide>
              <Image src={image} />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Grid visibleFrom="xs" gutter={em(40)}>
          {images.map((image, index) => (
            <Grid.Col {...cols?.[index]}>
              <Image src={image} />
            </Grid.Col>
          ))}
        </Grid>
      </>
    ) : (
      <Image src={images[0]} />
    )
  ) : null;
};
