const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
        allWpPage {
            edges {
                node {
                    id
                    slug
                    status
                }
            }
        }
        allWpPost {
            edges {
                node {
                    id
                    slug
                    status
                }
            }
        }
    }
  `)

    const { allWpPage, allWpPost } = result.data

    const pageTemplate = path.resolve(`./src/templates/page.js`)
    allWpPage.edges.forEach(edge => {
        createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
                id: edge.node.id,
            },
        })
    })

    const postTemplate = path.resolve(`./src/templates/post.js`)
    allWpPost.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.slug}/`,
            component: slash(postTemplate),
            context: {
                id: edge.node.id,
            },
        })
    })
}