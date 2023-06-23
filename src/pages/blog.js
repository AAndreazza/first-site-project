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
            
            {data.posts.edges.map(post => {
                return ( 
                

            <div class="bg-white py-8 sm:py-8">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                {/*<div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
                </div>*/}
                <ul role="list" class="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <li>
                    <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt=""/>
                    <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"><Link to={post.node.slug}>{post.node.titulo}</Link></h3>
                    <p class="text-base leading-7 text-gray-600">Incluir breve descricao...</p>
                    <ul role="list" class="mt-6 flex gap-x-6">
                    <li>
                        <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">LinkedIn</span>
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                        </svg>
                        </a>
                    </li>
                    </ul>
                </li>
                
                </ul>
            </div>
            </div>
            )
        })}
        </div>
    )
}

export default Blog