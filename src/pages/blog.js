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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {data.posts.edges.map(post => {
                return ( 
                
            <div key={post.node.slug}>
            <div class="bg-white py-8 sm:py-8">
                <div class="mx-auto max-w-2xl px-6 lg:px-8">
                {/*<div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
                </div>*/}
                    <img 
                        class="aspect-[3/2] w-full rounded-2xl object-cover" 
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" 
                        alt=""
                    />
                    <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        <Link to={post.node.slug}>{post.node.titulo}</Link>
                    </h3>
                    <p class="text-base leading-7 text-gray-600">Incluir breve descricao...</p>
                    
                    {/* Incluir foto com nome, maybe */}      
                </div>
            </div>
            </div>
            )
        })}
        </div>
    )
}

export default Blog