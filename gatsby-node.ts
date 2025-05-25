import path from "path"
import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data, errors } = await graphql<Queries.AllMarkdownQuery>(`
    query AllMarkdown {
      allMarkdownRemark {
        nodes {
          id
          parent {
            ... on File {
              name
              relativeDirectory
            }
          }
          frontmatter {
            slug
            templateKey
          }
        }
      }
    }
  `);

  if (errors) {
    errors.forEach((e: any) => console.error(e.toString()))
    throw errors
  }

  // createPage({
  //   path: 'cases/_new_',
  //   component: path.resolve(`src/templates/cases.tsx`),
  //   context: {
  //     id: '_new_',
  //   },
  // })

  data?.allMarkdownRemark.nodes.forEach(node => {
    if (node.parent && 'name' in node.parent) {
      const { slug, templateKey } = node.frontmatter ?? {};
      const { name, relativeDirectory } = node.parent || {};

      createPage({
        path: slug ?? `${relativeDirectory}/${name}`,
        component: path.resolve(`src/templates/${templateKey}.tsx`),
        context: {
          id: node.id,
        },
      })
    }
  })
}
