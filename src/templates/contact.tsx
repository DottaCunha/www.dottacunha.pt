import * as React from "react";
import { graphql, type PageProps } from "gatsby";
// import { Flex, Link, Stack, Text } from "@chakra-ui/react"

// import { SEO } from "../components"
// import { withPagePreview } from "../utils"
import MainLayout from "../layouts/MainLayout";

// export const Head = () => (
//   <SEO />
// )

export const query = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        email
        phone
        location
        links {
          name
          url
        }
      }
    }
  }
`;

export const ContactPage = ({ data }: PageProps<Queries.ContactPageQuery>) => {
  const { email, phone, links, location } =
    data.markdownRemark?.frontmatter ?? {};
  return <MainLayout>Contact</MainLayout>;
};

export default ContactPage;
