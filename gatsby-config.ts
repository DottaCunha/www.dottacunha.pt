import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dotta & Cunha, Lda`,
    siteUrl: `https://dottacunha.pt`,
    description: `TODO`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-decap-cms",
      // options: {
      //   modulePath: `${__dirname}/src/cms/cms.js`,
      // },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 630,
            },
          },
          // {
          //   resolve: "gatsby-remark-responsive-iframe",
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // "gatsby-remark-prismjs",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
  ],
};

export default config;
