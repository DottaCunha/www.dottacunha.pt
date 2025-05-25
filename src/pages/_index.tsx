import React from "react";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";

import { Heading, Hero, Section } from "../components";
import { MainLayout } from "../layouts";
import { Container, Stack, Text, Title } from "@mantine/core";

import image_1 from '../images/1.jpeg';
import image_2 from '../images/2.png';
import image_3 from '../images/3.jpeg';
import image_4 from '../images/4.png';
import image_5 from '../images/5.png';
import image_6 from '../images/6.png';


const sections = [
  {
    title: "Lifestyle",
    body: "We believe that a successful investment isn’t just about returns — it’s about enhancing the quality of life. From vibrant urban developments to tranquil suburban retreats, our properties are designed to enrich the lives of their inhabitants, blending comfort, convenience, and smart technology into every detail.",
    images: [
      image_1,
      image_2,
    ]
  },
  {
    title: "Smart tech",
    body: "We integrate the latest in smart technology to create spaces that are not only beautiful but also intelligent. From energy-efficient systems to advanced security features, our properties are future-proofed to meet the evolving needs of modern living.",
    images: [
      image_3
    ]
  },
  {
    title: "Design",
    body: "Great design is the cornerstone of any successful investment. Our design philosophy is rooted in the balance of form and function, ensuring that every space is as practical as it is beautiful. Whether it’s a minimalist modern condo or a classic suburban home, our designs inspire and endure.",
    images: [
      image_4,
    ]
  },
  {
    title: "Sustainability",
    body: "Sustainability is at the heart of everything we do. We are committed to creating eco-friendly developments that minimize environmental impact while maximizing value. Through innovative construction techniques and sustainable materials, we’re not just building properties — we’re building a better future.",
    images: [
      image_5,
      image_6,
    ]
  },
];

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Heading my="xl">
        Shaping the Future of Investment
      </Heading>
      <Stack gap='lg'>
        {sections.map((section, index) => (
          <Section index={index} {...section} />
        ))}
      </Stack>
      <ColorSchemeToggle />
    </MainLayout>
  );
}
