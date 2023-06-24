const path = require('path')

exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions 

    const posts = await graphql(`
        query {
            posts: allContentfulPost(filter: {visivel: {eq: true}}) {
            edges {
                node {
                titulo
                slug
                }
            }
            }
        }
    `)
    const postTemplate = path.resolve('src/pages/post.js')
    posts.data.posts.edges.forEach(post => {
        createPage({
            path: post.node.slug,
            component: postTemplate,
            context: {
                slug: post.node.slug
            }
        })
    });
}