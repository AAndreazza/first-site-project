import React from "react"
import { graphql, useStaticQuery, Link} from "gatsby"
import LayoutSimples from "../components/LayoutSimples"

// Incluir imagens...
const POSTS_QUERY = graphql`
    query {
        posts: allContentfulPost(filter: {visivel: {eq: true}}) {
        edges {
            node {
            titulo
            slug
            imagemApresentacao {
                resize(width: 320, height: 350) {
                  src
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
        <LayoutSimples> 
            <div class="mx-8 max-w-2xl lg:mx-8 mt-40">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Informações valiosas para alcançar o equilíbrio entre a mente e o corpo</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Nossa missão é motivar você a cuidar de si mesmo(a) e descobrir o potencial ilimitado dentro de si. Prepare-se para embarcar em uma jornada de autodescoberta, superação e bem-estar. </p>
            </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
            {data.posts.edges.map(post => {
                return ( 
                
            <div key={post.node.slug}>
            <div class="bg-gray-100 rounded-2xl py-8 sm:py-8">
                <div class="mx-auto max-w-2xl px-6 lg:px-8">
                {/*<div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
                </div>*/}
                    <Link to={post.node.slug}>
                    <img 
                        class="aspect-[3/2] w-full rounded-2xl object-cover" 
                        src={post.node.imagemApresentacao.resize.src}
                        alt="imagem de apresentação do post"
                    />
                    <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 text-center">
                        {post.node.titulo}
                    </h3>
                    </Link>
                    {/* Incluir foto com nome, maybe */}      
                </div>
            </div>
            </div>
            )
        })}
        </div>
        </LayoutSimples>
    )
}

export default Blog