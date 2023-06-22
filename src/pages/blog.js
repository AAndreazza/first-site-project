import React from "react"
import { graphql, useStaticQuery, Link} from "gatsby"

const POSTS_QUERY = graphql`
    query {
        posts: allContentfulPost(filter: {visivel: {eq: true}}) {
        edges {
            node {
            titulo
            slug
            conteudo {
                internal {
                content
                type
                }
            }
            }
        }
        }
    }
`

const Blog = () => {
    const data = useStaticQuery(POSTS_QUERY)
    return (
        <div>
            <h1>TESTE</h1>  
            {data.posts.edges.map(post => {
                return <h3><Link to={post.node.slug}>{post.node.titulo}</Link></h3>
            })}
        </div>
    )
}

export default Blog